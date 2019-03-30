<template>
  <div class=".collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{title}}</h3>
        <a href="#">更多</a>
      </div>
      <div class="list clearfix" v-if="TodayRecommandData.song_list">
        <router-link :to="{ name:'Play',params:{id:item.song_id} }"
          href="#"
          class="item"
          v-for="(item,index) in TodayRecommandData.song_list"
          :key="item.song_id"
          :class="{'clear-padding': index%3 !== 1}"
        >
          <div class="img-wrapper">
            <img :src="item.pic_radio" alt>
          </div>
          <div class="main">{{ filterData(item.title) }}</div>
          <div class="gray">{{ filterData(item.author) }}</div>
        </router-link>
      </div>
      <div v-else>正在加载数据...</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      TodayRecommandData: {}
    };
  },
  methods: {
    filterData(value) {
      if (value.length > 8) {
        return value.substring(0, 8) + "...";
      }
      return value;
    }
  },
  props: {
    ListParams: {
      type: Object,
      default: function() {
        return {
          method: "baidu.ting.billboard.billList",
          type: 1,
          size: 1,
          offset: 0
        };
      }
    },
    title: {
      type: String,
      defalut: ""
    }
  },
  mounted() {
    //请求数据
    this.$axios
      .get(this.HOST + "/v1/restserver/ting", {
        params: this.ListParams
      })
      .then(res => {
        this.TodayRecommandData = res.data;
      });
  }
};
</script>
<style scoped>
.collection-block {
  background-color: #f8f8f8;
  padding: 5px 0;
}

.block-padding {
  padding: 10px 17px;
  background-color: #fff;
}

.title {
  display: flex;
  margin: 14px 0 18px;
}

.title h3 {
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}

.list {
  width: 100%;
}

.list .item {
  float: left;
  width: 31.33%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.clear-padding {
  padding: 0 !important;
}

.main {
  margin-top: 4px;
  font-size: 12px;
}

.gray {
  font-size: 12px;
  color: #999;
}

.btn-more {
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>
