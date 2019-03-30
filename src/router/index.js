import Vue from 'vue'
import Router from 'vue-router'
import Home from "../containers/Home.vue"
import Mine from "../containers/Mine.vue"
import MusicList from "../containers/MusicList.vue"
import Search from "../containers/Search.vue"
import Singer from "../containers/Singer.vue"
import Top from "../containers/Top.vue"
import Play from "../containers/Play.vue"


Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/list',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/play/:id',
      name: 'Play',
      component: Play
    }
  ]
})
