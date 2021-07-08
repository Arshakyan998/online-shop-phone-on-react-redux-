const initalState={
        items:[],
        isLoaded:false,
        item:[],
        search:"",
                
            
}


export const showItems=(state=initalState,action)=>{
switch (action.type) {
    case "ADD_ITEMS":{
        return{
            ...state,
            items:action.payload,
            isLoaded:true
        }

    }

    case 'INFO_ABOUT_ITEM':{
        const newItem=state.items.filter(element=>element.id===action.payload)

        return{
            ...state,
            item:newItem
        }
    }

    case 'ADD_NEW_ITEMS':{

        let it=[...state.items].splice(0,6)
        let newItes=state.items.length<24?[...state.items,...it]:[...state.items]

        



        return{
            ...state,
            items:newItes
            
        }
    }
        
    case "SEARCH_PHONE":{
        const newItem=state.items.filter(element=>element.name.toLowerCase().includes(action.payload))
        return{
            ...state,
            items:newItem,
            search:action.payload
        }
    }
    case"LOADING":{

        return{
            ...state,
            isLoaded:action.payload
        }
    }

    default:
        return state;
}

        

}