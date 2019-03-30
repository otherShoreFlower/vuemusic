<template>
  <div class="play">
    <!-- 头部信息 -->
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p v-if="playerData.songinfo">{{ playerData.songinfo.title }}</p>
          <p v-if="playerData.songinfo" class="author">{{ playerData.songinfo.author }}</p>
        </div>
        <a>
          <i class="iconfont icon-sousuo right"></i>
        </a>
      </div>
    </div>
    <!-- 歌曲信息 -->
    <div class="song-info">
      <div class="song-info-img">
        <img v-if="playerData.songinfo" :src="playerData.songinfo.pic_big" alt="歌手写真">
        <Lrc :id="this.$route.params.id" :currentTimes="currentTimes" :durationTime="durationTime" />
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
    <!-- 播放控制面板 -->
    <div class="song">
      <audio ref="player" v-if="playerData.bitrate" :src="playerData.bitrate.file_link" controls></audio>
    </div>
  </div>
</template>
<script>
const Lrc = () => import("../components/Lrc.vue");
export default {
  name: "Play",
  components: {
    Lrc
  },
  data() {
    return {
      playerData: {},
      currentTimes:0,
      durationTime:0
    };
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.song.play",
          songid: this.$route.params.id
        }
      })
      .then(res => {
        this.playerData = res.data;
        //更新DOM 执行事件playerEvent,延时器不可取
        /* var _this = this;
        setTimeout(function(){
            _this.playerEvent();
        }) */
        this.$nextTick(function() {
          this.playerEvent()
        })
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    // 注册事件:获取当前播放时间和播放总时长
    playerEvent() {
      var _this = this;
      //获取当前播放时间
      this.$refs.player.addEventListener("timeupdate", function() {
        _this.currentTimes = _this.$refs.player.currentTime;
      })
      //获取播放总时长
      this.$refs.player.addEventListener("canplay", function() {
        _this.durationTime = _this.$refs.player.duration;
      })
    }
  }
};
</script>
<style scoped>
.header {
  padding: 15px;
}
.music-info {
  flex: 1;
  font-size: 20px;
}

.title {
  display: flex;
  text-align: center;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  margin-top: 30px;
}

.iconbox .box {
  flex: 1;
}

.song {
  width: 100%;
  text-align: center;
}

.song audio {
  width: 80%;
}

.active {
  color: #222;
}

.author {
  font-size: 12px;
  color: #999;
}
</style>
