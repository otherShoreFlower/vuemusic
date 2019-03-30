<template>
  <div id="app">
    <TopNav></TopNav>
    <List :ListParams="TodayRecommand" title="今日推荐"/>
    <List :ListParams="HotList" title="热门歌单"/>
    <List :ListParams="newList" title="新歌速递"/>
    <Carousel :banners="banners"/>
    <MusicTop/>
    <List :ListParams="loveList" title="情歌对唱" />
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import List from "../components/List";
import Carousel from "../components/Carousel";
import MusicTop from "../containers/HomeSub/MusicTop";
export default {
  name: "Home",
  components: {
    TopNav,
    List,
    Carousel,
    MusicTop
  },
  data() {
    return {
      TodayRecommand: {
        method: "baidu.ting.billboard.billList",
        type: 1,
        size: 6,
        offset: 0
      },
      HotList: {
        method: "baidu.ting.billboard.billList",
        type: 2,
        size: 6,
        offset: 0
      },
      newList: {
        method: "baidu.ting.billboard.billList",
        type: 11,
        size: 3,
        offset: 0
      },
      loveList: {
        method: "baidu.ting.billboard.billList",
        type: 23,
        size: 9,
        offset: 0
      },
      banners: [
        require("../assets/img/b1.jpg"),
        require("../assets/img/b2.jpg"),
        require("../assets/img/b3.jpg")
      ]
    };
  }
};
</script>

<style scoped>
</style>

