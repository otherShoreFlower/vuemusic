<template>
  <ul class="top-nav">
    <li>
        <router-link to="/" exact>首页</router-link>
    </li>
    <li>
        <router-link to="/list" exact>歌单</router-link>
    </li>
    <li>
        <router-link to="/singer" exact>歌手</router-link>
    </li>
    <li>
        <router-link to="/top" exact>榜单</router-link>
    </li>
    <li>
        <router-link to="/mine" exact>我的</router-link>
    </li>
    <li>
        <router-link to="/search" exact>搜索</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "TopNav"
};
</script>
<style scoped lang="less">
.top-nav {
  display: flex;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    padding-top: 10px;
    a {
      display: block;
      padding-bottom: 8px;
    }
    .active {
      border-bottom: 2px solid #ff0000;
    }
  }
}
</style>
