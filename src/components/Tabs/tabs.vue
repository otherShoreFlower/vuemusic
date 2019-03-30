<script>
import Content from "./content"
export default {
  name: "Tabs",
  data(){
      return{
          panes:[]
      }
  },
  components:{
      Content
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: 0
    }
  },
  methods:{
      onChangeIndex(index){
          this.$emit("changeKey", index)
      }
  },
  
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {/* render插槽使用方式,读取自定义标签中的内容 */}
          {this.$slots.default}
        </ul>
        <Content panes={ this.panes }/>
      </div>
    );
  }
};
</script>
<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
