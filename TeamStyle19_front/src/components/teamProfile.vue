<template>
  <div id="wrap">
    <div class="column right">
      <h1>{{teamname}}</h1>
      <p v-if="isleader"> 邀请码： {{invitecode}}</p>
    </div>
    <div class="column left">
      <img v-if="headurl" :src="headurl">
      <!--头像在这里显示-->
    </div>
    <upload message="上传头像" v-bind:isProfile="isProfile" v-bind:icon="icon" v-bind:acceptedFormat="acceptedFormat" style="width: 100px; height: 100px; line-height: 100px"></upload>
    <el-table :data="team" :span-method="arraySpanMethod" stripe border>
      <el-table-column prop="leader" label="队长" align="center">
      </el-table-column>
      <el-table-column prop="member" label="队员" align="center">
      </el-table-column>
      <el-table-column label="操作" v-if="isleader" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <h1>Battle History</h1>
      <el-table :data="history">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="time" label="对战时间" align="center">
        </el-table-column>
        <el-table-column prop="round" label="回合数" align="center">
        </el-table-column>
        <el-table-column prop="winner" label="winner" align="center">
        </el-table-column>
        <el-table-column prop="loser" label="loser" align="center">
        </el-table-column>
        <el-table-column label="回放文件">
          <template slot-scope="rpy">
            <el-button size="mini" type="primary" @click="handleDownload(rpy.$index, rpy.row)">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import upload from './upload'
  import foot from './foot'
  import authSrv from '@/api/auth.js'
  import teamSrv from '@/api/team.js'
  export default {
    name: 'teamProfile',
    components: {
      upload,
      foot
    },
    data() {
      return {
        team: [],
        history: [],
        //memberid: [],
        isleader: true,
        teamname: null,
        invitecode: null,
        isProfile: true,
        icon: "el-icon-plus",
        acceptedFormat: ['image/*'],
        headurl: null,
      }
    },
    created() {
      //if(this.$store.state.isLeader!=null){
      //    this.isleader = this.$store.state.isLeader
      //} else {
      authSrv.getHeadpic(this).then(response => {
        this.headurl = "data:image/jpeg;base64," + response.body
      })
      teamSrv.isLeader(this)
      //}
      teamSrv.showMyteam(this)
      this.renderBattleHistory(localStorage.getItem('teamstyle_id'))
      //this.renderBattleHistory(35)
    },
    methods: {
      handleDelete(index, row) {
        teamSrv.removeMember(this, this.team[index].member, teamSrv.showMyteam)
      },
      arraySpanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        if (columnIndex == 0) {
          if (rowIndex == 0) {
            console.log(row)
            return [this.team.length, 1]
          } else if (rowIndex > 0) {
            return [0, 0]
          }
        }
      },
      renderBattleHistory(userid){
          if(!userid){
              //alert("请先登录")
              this.$notify({
                  message: '请先登录',
                  type: 'warning'
              })
              this.$router.push('/login')
          } else{
            teamSrv.getBattleHistory(this,userid).then(response => {
                console.log(response.body)
                this.history = []
                response.body.history.forEach(element=>{
                    this.history.push({
                        time: element.time,
                        round: element.round,
                        winner: element.winner,
                        loser: element.loser,
                        battleid: element.battleid
                    })
                })
            }, response => {
                this.history = []
                //alert('fail to get battle history')
            })
        }
      },
      handleDownload(index, row) {
        let that = this
        var ajax = new XMLHttpRequest()
        ajax.responseType = 'blob'
        ajax.open("post", "/backend/teams/record/", true)
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        ajax.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              console.log(this.response) // should be a blob
              if (this.response.type == "application/octet-stream") {
                that._downloadHandler(this.response)
              }
            }
          } else if (this.readyState == 2) {
            if (this.status == 200) {
              this.responseType = "blob"
            } else {
              this.responseType = "text"
            }
          }
        }
        ajax.send("battleid=" + row.battleid)
      },
      _downloadHandler(content) {
        console.log('download')
        var _link = document.createElement('a')
        _link.download = 'record.zip'
        _link.style.display = 'none'
        var blob = new Blob([content], {
          type: 'application/octet-stream'
        })
        _link.href = URL.createObjectURL(blob)
        document.body.appendChild(_link)
        _link.click()
        document.body.removeChild(_link)
      }
    }
  }

</script>

<style lang="scss" scoped>
  div#wrap {
    max-width: 600px;
    min-width: 480px;
    margin: 40px auto;
  }

  .footer {
    position: absolute;
    margin-top: 60px;
    left: 0;
  }

  div.column {
    display: inline-block;
    vertical-align: top;
  }

  div.left {
    width: 30%;
    float: right;
  }

  div.right {
    width: 30%;

  }

  p {
    margin-bottom: 0;
  }

  h1 {
    text-align: left;
    font-size: 24px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width:720px) {
    #wrap {
      width: 80%;
      margin: 20% 5% 0 !important;

    }
  }

</style>
