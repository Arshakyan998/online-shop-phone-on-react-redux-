import axios from "axios"



export const API=async(api)=>{
         
      return  axios.get(api).then(({data})=>data)

}