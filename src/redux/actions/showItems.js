import { API } from "./api"

export const getFetchItems=(cat)=>(dispatch)=>{



const api=`http://localhost:3004/items?${cat!==null?`categoryId=${cat}`:''}`

API(api).then(data=>dispatch(addItems(data)))

}
        

const addItems=(val)=>{

        return{
                type:"ADD_ITEMS",
                payload:val
        }

}

export const infoAboutItem=(val)=>{
       return{
        type:"INFO_ABOUT_ITEM",
        payload:val
       }

}

export const serchPhone=(val)=>({
        type:"SEARCH_PHONE",
        payload:val
})

export const addNewItems=()=>({
        type:"ADD_NEW_ITEMS",
})