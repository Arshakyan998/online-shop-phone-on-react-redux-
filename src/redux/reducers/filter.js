const initalState={
        category:null
}

export const filter=(state=initalState,action)=>{
        switch (action.type) {
                case "FILTER_ITEMS":
                        
                      return{
                              ...state,
                              category:action.payload
                      }
        
                default:
                        return state;
        }
}