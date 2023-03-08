interface State {
    showHeader:boolean 
    
}
const checkheader={
    state:{
        showHeader:true
    },
    getters:{
        showHeader: (state: State) => {
            return state.showHeader;
          },
    },
    mutations:{
        checkHeader(state:State,payload:boolean) {
            state.showHeader=payload;
          
           
          },
    },
    actions:{
        scrollToTop:()=>{
            
        }
    }
}
export default checkheader;