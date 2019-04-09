# 我的vue项目音乐播放器 #
```JavaScript
protected void onDestroy() {
    EventBus.getDefault().unregister(this);
    super.onDestroy();
}
document.getElementById("myH1").innerHTML="Welcome to my Homepage";
var express = require("express");
var app = express();
var router = require("./router.js");
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/api",router);

app.listen(3001,function(){
    console.log("服务器运行在3001端口上");
    
})
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
```
![我是图片](https://gitee.com/strivelive/readme/raw/master/src/static/images/banner4.png)