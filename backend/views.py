from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse
from django.views import generic
from django.db import models,connection
from .models import TeamInfo, StudentInfo, RuleFile
from .forms import StudentRegForm, StudentLoginForm, PasswordModifyForm, TeamAddForm
from django.views.decorators.csrf import csrf_exempt

from base64 import b64encode
import re
import hashlib
import os
import binascii

# Create your views here.


class StartView(generic.ListView):
    template_name = 'backend/groups.html'
    context_object_name = 'all_teams'

    def get_queryset(self):
        return TeamInfo.objects.all()


class GroupDetail(generic.DetailView):
    model = TeamInfo
    template_name = 'backend/GroupDetail.html'


class StudentDetail(generic.DetailView):
    model = StudentInfo
    template_name = 'backend/StudentDetail.html'


class RuleFileView(generic.DetailView):
    model = RuleFile
    template_name = 'backend/RuleFile.html'

@csrf_exempt
def StudentReg(request):
    if request.method == 'POST':
        students = StudentInfo.objects.all()
        success = True
        message = ""
        form = StudentRegForm(request.POST)
        if form.is_valid():
            the_name = form.cleaned_data['name']
            the_pwd = form.cleaned_data['pwd']
            the_email = form.cleaned_data['email']
            try:
                the_student = StudentInfo.objects.get(student_nickname = the_name)
                if the_student:
                    success = False
                    message += "the name exist!"
            except:
                success = True
            if success == True:
                the_salt = binascii.hexlify(os.urandom(4)).decode()
                new_student = StudentInfo.objects.create(
                    student_nickname = the_name,
                    salt = the_salt,
                    password = hashlib.sha224((the_pwd + the_salt).encode('utf-8')).hexdigest(),
                    thu_email = the_email
                )
                new_student.save()
                message += "success!"
        else :
            success = False
            message = form.errors
        return JsonResponse({'success':success,'message':message})

    elif request.method == 'GET':      
        return JsonResponse({'success':str(request.body),'POST':str(request.POST),'GET':str(request.GET)})

@csrf_exempt
def StudentLogin(request):
    if request.method == 'POST':
        students = StudentInfo.objects.all()
        success = False
        flag = False
        message = ""
        form = StudentLoginForm(request.POST)
        if form.is_valid():
            the_name = form.cleaned_data['name']
            try:
                the_student = StudentInfo.objects.get(student_nickname = the_name)
                the_pwd = hashlib.sha224((form.cleaned_data['pwd'] + the_student.salt).encode('utf-8')).hexdigest()
                if the_student.password == the_pwd:
                    success = True
                else :
                    message += "wrong password!"
            except:
                message += "the user does not exist!"

            if success == True:
                return JsonResponse({'success':success,'id':str(the_student.id),'message':message})            
            else:
                return JsonResponse({'success':success,'post':str(request.POST),'message':message})
        else:
            return JsonResponse({'success':False,'message':form.errors})
    elif request.method == 'GET':      
        return JsonResponse({'success':str(request.body),'POST':str(request.POST),'GET':str(request.GET)})


@csrf_exempt
def StudentLeader(request):
    success = False
    message = ""
    if request.method == 'POST':
        the_id = request.POST['userid']
        the_student = StudentInfo.objects.get(id = the_id)
        isleader = the_student.is_leader
        the_name = the_student.student_nickname
        success = True
        return JsonResponse({'success':success,'message':message,'name':the_name,'isleader':isleader})
    else :
        return JsonResponse({'success':str(request.body),'POST':str(request.POST),'GET':str(request.GET)})

@csrf_exempt
def ModifyPwd(request):
    success = False
    if request.method == 'POST':
        form = PasswordModifyForm(request.POST)
        if form.is_valid():
            the_id = form.cleaned_data['id']
            the_student = StudentInfo.objects.get(id = the_id)
            if the_student:
                old_pwd = hashlib.sha224((form.cleaned_data['oldpwd'] + the_student.salt).encode('utf-8')).hexdigest()
                if the_student.password == old_pwd:
                    new_pwd = form.cleaned_data['newpwd']
                    the_student.password = hashlib.sha224((new_pwd + the_student.salt).encode('utf-8')).hexdigest()
                    the_student.save()
                    success = True
                    return JsonResponse({'userid':the_id,'password':the_student.password})
                else :
                    message = "The old password is wrong!"
                    return JsonResponse({'success':success,'message':message})
            else :
                message = "The student doesn't exist！"
                return JsonResponse({'success':success,'message':message})
        else:
            return JsonResponse({'success':success,'message':form.errors})
    else :
        return JsonResponse({'response':str(request.body)})


@csrf_exempt
def TeamAdd(request):
    if request.method == 'POST':
        form = TeamAddForm(request.POST)
        if form.is_valid():#创建队伍
            teams = TeamInfo.objects.all()
            success = True
            message = ""
            response = {}
            the_leader = form.cleaned_data['userid']
            invite_code = form.cleaned_data['invitecode']
            the_name = form.cleaned_data['teamname']
            the_student = StudentInfo.objects.get(id = the_leader)
            for t in teams:
                if t.team_name == the_name:
                    success = False
                    message += "team name exist!"
                    return JsonResponse({'success':success,'message':message})
                if t.invite_code == invite_code:
                    success = False
                    message += "invite code exist!"
                    return JsonResponse({'success':success,'message':message})
            if the_student.team_name :
                success = False
                message += " you've already have a team!"
            if success == True:
               new_team = TeamInfo.objects.create(
                    team_name = the_name,
                    leader = the_student.student_nickname,
                    invite_code = invite_code
                    )
               new_team.member_num = 1
               new_team.save()
               the_student.team_name = new_team
               the_student.is_leader = True
               the_student.save()
               response['success'] = success
               response['teamname'] = the_name
               response['teamid'] = new_team.id
               response['leader'] = the_student.student_nickname
               response['scale'] = new_team.member_num
               return JsonResponse(response)
        else :
            return JsonResponse({'success':False,'message':form.errors})
        return JsonResponse({'success':success,'message':message,'team':the_name})
    elif request.method == 'GET':
        return JsonResponse({'success':str(request.body),'POST':str(request.POST),'GET':str(request.GET)})

@csrf_exempt
def TeamJoin(request):
    if request.method == 'POST':
        invite_code = request.POST['invitecode']
        success = False
        message = ""
        response = {}
        the_id = request.POST['userid']
        the_student = StudentInfo.objects.get(id = the_id)
        if the_student.team_name :
            message += " you've already have a team!"
            return JsonResponse({'success':success,'message':message,'name':the_student.student_nickname,'team':the_student.team_name.team_name})
        else :
            the_team = TeamInfo.objects.get(id = request.POST['teamid'])
            if the_team.invite_code != invite_code:
                message = "the wrong invite code !"
                return JsonResponse({'success':success,'message':message})
            the_scale = the_team.member_num
            if the_scale < 4:
                success = True
                the_student.team_name = the_team
                the_student.save()
                if the_scale == 1:
                    the_team.member1 = the_student.student_nickname
                    the_team.member_num += 1
                    the_team.save()
                elif the_scale == 2:
                    the_team.member2 = the_student.student_nickname
                    the_team.member_num += 1
                    the_team.save()
                else :
                    the_team.member3 = the_student.student_nickname
                    the_team.member_num += 1
                    the_team.save()
                return JsonResponse(response)
                response['teamname'] = the_team.team_name
                response['teamid'] = the_team.id
                response['leader'] = the_team.leader 
                response['scale'] = the_team.member_num
                return JsonResponse(response)
                response['member1'] = the_team.member1
                response['member2'] = the_team.member2
                response['member3'] = the_team.member3                
                response['success'] = success
                return JsonResponse(response)
            else:
                message += "the team is full!"
                member_num = 4
                return JsonResponse({'success':success,'message':message})
        #except:
        #    message += "the team doesn't exist!"
        #    return JsonResponse({'success':success,'message':message})
    elif request.method == 'GET':
        return HttpResponse(locals())
        #return JsonResponse({'success':str(request.body),'POST':str(request.POST),'GET':str(request.GET)})

@csrf_exempt
def TeamExit(request):
    cursor = connection.cursor()
    if request.method == 'POST':
        the_student = StudentInfo.objects.get(id = request.POST['userid'])
        the_team = TeamInfo.objects.get(team_name = the_student.team_name.team_name)
        the_name = the_student.student_nickname
        if the_team.member1 == the_name:
            if the_team.member2 :
                the_team.member1 = the_team.member2
                if the_team.member3:
                    the_team.member2 = the_team.member3
                else:
                    del the_team.member2
                    cursor.execute("update backend_teaminfo set member2 = null where id = " + str(the_team.id))
            else :
                del the_team.member1
                cursor.execute("update backend_teaminfo set member1 = null where id = " + str(the_team.id))

        elif the_team.member2 == the_name:
            if the_team.member3:
                the_team.member2 = the_team.member3
            else :
                del the_team.member2
                cursor.execute("update backend_teaminfo set member2 = null where id = " + str(the_team.id))

        elif the_team.member3 == the_name:
            del the_team.member3
            cursor.execute("update backend_teaminfo set member3 = null where id = " + str(the_team.id))
        else:
            message = "the student is not in the team!"
            success = False
            return JsonResponse({'success':success,'message':message})
        the_team.member_num -= 1
        the_team.save()
        cursor.execute("update backend_studentinfo set team_name_id = null where id = " + request.POST['userid'])
        cursor.close()
        response = {}
        response['teamname'] = the_team.team_name
        response['teamid'] = the_team.id
        response['leader'] = the_team.leader 
        response['scale'] = the_team.member_num
        response['member1'] = the_team.member1
        response['member2'] = the_team.member2
        response['member3'] = the_team.member3        
        return JsonResponse(response)
    else :
        return JsonResponse({'response':str(request.body)})

@csrf_exempt
def MyTeam(request):
    success = False
    message = ""
    if request.method == 'POST':
        the_id = request.POST['userid']
        the_student = StudentInfo.objects.get(id = userid)
        if the_student.team_name :
            the_team = TeamInfo.objects.get(team_name = the_student.team_name)
            success = True
            response = {}
            response['success'] = success
            response['teamid'] = the_team.id
            response['teamname'] = the_team.team_name
            response['scale'] = the_team.member_num
            response['leader'] = the_team.leader
            response['member1'] = the_team.member1
            response['member2'] = the_team.member2
            response['member3'] = the_team.member3
            if the_student.isleader():
                response['invitecode'] = the_team.invite_code
            return JsonResponse(response)
        else :
            message += "You haven't joined a team!"
            return JsonResponse({'success':success,'message':message})            
    elif request.method == 'GET':
        return HttpResponse(locals())

@csrf_exempt
def AllTeam(request):
    if request.method == 'POST':
        return HttpResponse(locals())
    elif request.method == 'GET':
        response = []
        teams = TeamInfo.objects.all()
        for team in teams:
            response.append({
                'teamid':team.id,
                'teamname':team.team_name,
                'scale':team.member_num,
                'leader':team.leader,
                'member1':team.member1,
                'member2':team.member2,
                'member3':team.member3
                })
        return JsonResponse(response, safe = False)

'''@csrf_exempt
def UploadHeadpic(request):
    if request.method == 'POST':
        myfile = request.FILES.get("myfile",None)
'''
@csrf_exempt
def UploadFile(request):
    if request.method == 'POST':
        myfile = request.FILES['file']
        if not myfile:
            return JsonResponse({'success':False,'message':'no file found!'})
        else :
            url = '/home/ubuntu/team19/user/' + str(myfile.name)
            destination = open(url,'wb+')
            for chunk in myfile.chunks():
                destination.write(chunk)
            if request.POST['headpic'] == 'true': 
                the_id = request.POST['userid']
                the_student  = StudentInfo.objects.get(id = the_id)
                if the_student:
                    '''cursor = connection.cursor()
                    cursor.execute("update backend_studentinfo set profile_photo = \'" + url + "\' where id = " + the_id)
                    cursor.close()'''
                    the_student.profile_photo = '\'' + url + '\''
                    the_student.save()
                    return JsonResponse({'success':'aaaaaa!'})
                else :
                    return JsonResponse({'success':False,'message':"the user does not exist!"})              
            destination.close()
            return JsonResponse({'success':True,'message':'Upload!','post':str(request.POST)})
    elif request.method == 'GET':
        s = StudentInfo.objects.get(id = 10)
        image = s.profile_photo
        end = re.findall(r'\.(\w+)',str(image.name))
        return HttpResponse(image,content_type = "image/" + end[0])

@csrf_exempt
def GetHeadpic(request):
    if request.method == 'POST':
        the_id = request.POST['userid']
        image = StudentInfo.objects.get(id = the_id).profile_photo
        f = open(image.name,'rb').read()
        response = b64encode(f) 
        return HttpResponse(response)
        #return JsonResponse({'url':image.name})
    elif request.method == 'GET':
        return HttpResponse(locals())
