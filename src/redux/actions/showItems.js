import { API } from "./api"

const loading=(val)=>({
        type:"LOADING",
        payload:val
})

export const getFetchItems=(cat)=>(dispatch)=>{
dispatch(loading(false))


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