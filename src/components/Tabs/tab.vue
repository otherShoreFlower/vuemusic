<script>
export default {
  name: "Tab",
  props: {
    tabName: {
      type: String,
      default: "tab"
    },
    index:{
        type:[String,Number],
        default: 0
    }
  },
  computed: {
    //   对比高亮
      active(){
          return this.$parent.currentIndex == this.index;
      }
  },
  methods:{
      getIndexHandler(event){
          this.$parent.onChangeIndex(this.index)
      }
  },
  mounted(){
      this.$parent.panes.push(this);
  },    
  render() {
      let className={
          tab: true,
          active: this.active
      }
    return <li onClick={this.getIndexHandler.bind(this)} class={className}>{this.tabName}</li>;
  }
};
</script>
<style scoped>
.tab {
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
}

.tab.active {
  border-bottom: 2px solid blue;
}
</style>