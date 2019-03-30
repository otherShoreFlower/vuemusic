<script>
export default {
    name:"Conrent",
    props:["panes"],
    render(){
        return(
            <div>
               {
                   this.panes.map((element,index) => {
                       return(
                           <div>{element.active ? element.$slots.default : ""}</div>
                       )
                   })
               }
            </div>
        )
    }
}
</script>
