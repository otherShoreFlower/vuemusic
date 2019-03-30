<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <!-- {{ currentTimes }} - {{ durationTime }} -->
      <!-- <p
      v-if="currentTimes >= allKeys[index]  && currentTimes < allKeys[index+1]"
        v-for="(value,key,index) in lrcData"
        :key="index"
      >{{ value }}</p> -->
      <p
        class="lrc-p"
        :class="{'active':currentTimes >= allKeys[index]  && currentTimes < allKeys[index+1]}"
        v-for="(value,key,index) in lrcData"
        :key="index"
      >
        {{ value }} {{getScrollTop(index)}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lrc",
  data() {
    return {
      lrcData: {},
      allKeys: []
    };
  },
  props: {
    id: {
      type: [String, Number],
      default: 0
    },
    currentTimes: {
      type: [String, Number],
      default: 0
    },
    durationTime: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.song.lry",
          songid: this.id
        }
      })
      .then(res => {
        this.setLRC(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getAllKeys() {
      for (var i in this.lrcData) {
        this.allKeys.push(i);
      }
    },
    setLRC(data) {
      var lyrics = data.lrcContent.split("\n");
      var lrcObj = {}; //存储对象
      //提取数据
      for (let i = 0; i < lyrics.length; i++) {
        //转码
        var lyric = decodeURIComponent(lyrics[i]);
        //创建正则
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        //提取时间
        var timeRegExpArr = lyric.match(timeReg);
        if (!timeRegExpArr) continue;
        //提取歌词
        var clause = lyric.replace(timeReg, "");
        //转换时间
        var t = timeRegExpArr[0];
        var min = Number(String(t.match(/\[\d*/i)).slice(1));
        var sec = Number(String(t.match(/\:\d*/i)).slice(1));
        var time = min * 60 + sec;
        lrcObj[time] = clause;
      }
      this.lrcData = lrcObj;
      this.getAllKeys();
    },
    //滚动函数
    getScrollTop(index) {
      if(this.currentTimes >= this.allKeys[index]  && this.currentTimes < this.allKeys[index+1]){
        this.$refs.lrc.style.top = -((index - 2) * 30) + "px";
      }
    }
  }
};
</script>
<style scoped>
.active {
  color: red;
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
}

.up30 {
  margin-top: -30px;
}
</style>


