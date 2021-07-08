const initalState={
        
        items:{},
        totalPrice:0,
        totalCount:0
}

export const addItemsToCart=(state=initalState,action)=>{

const totalPriceItems=(obj)=>{
        let sum=null
        for(let key in obj){
                sum+=obj[key].item.reduce((aggr,value)=>aggr+value.price,0)
        }

  return sum
}

const totalCountItems=(obj)=>{
        let total=null

for(let key in obj){
        total+=obj[key].item.length

}

        return total
  
}


const getItemsPrice=(arr)=>{
        let sum=null
        sum+=arr.reduce((aggr,value)=>value.price+aggr,0)

        return sum
}

const getItemsCount=(arr)=>{
        let sum=null
        sum+=arr.length
        return sum
}

switch (action.type) {
        case "ADD_ITEM_TO_CART":{
                const newItem = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].item, action.payload];

             
                
               
               let newObj={ 
                       ...state.items,
                      [action.payload.id]:{
                             item:newItem,
                             itemsCount: getItemsCount(newItem),
                             itemsPrice:getItemsPrice(newItem)
                      }
               } 
               
      
             
             
            return {
                    ...state,
                    items:newObj,
                    totalPrice:totalPriceItems(newObj),
                    totalCount:totalCountItems(newObj)
            }
        }

        case "ADD_NEW_ITEM_TO_CART":{
                let newItem=[
                        ...state.items[action.payload].item,
                           state.items[action.payload].item[0]
                ]


                let newObj={
                        ...state.items,
                        [action.payload]:{
                               item:newItem,
                               itemsCount: getItemsCount(newItem),
                             itemsPrice:getItemsPrice(newItem)
                        }
                }
return{
        ...state,
        items:newObj,
        totalPrice:totalPriceItems(newObj),
        totalCount:totalCountItems(newObj)
}

        }
        case "REMOVE_ITEM":{
 const newItem=state.items[action.payload].item.length>1?
 state.items[action.payload].item.slice(1):
 state.items[action.payload].item



   const newObj={
      
           ...state.items,
           [action.payload]:{
                   item:newItem,
                   itemsCount: getItemsCount(newItem),
                             itemsPrice:getItemsPrice(newItem)

           }
   }

   return{
           ...state,
           items:newObj,
           totalPrice:totalPriceItems(newObj),
        totalCount:totalCountItems(newObj)
   }
              
        }
        case "DELETE_ITEM":{

                const newObj={
                        ...state.items
                }
         delete newObj[action.payload]

         return {
                 ...state,
                 items:newObj,
                 totalPrice:totalPriceItems(newObj),
                 totalCount:totalCountItems(newObj)
         }

         }
         case "CLEAR_CART":{
                 return{
                         ...state,
                         items:{},
                         totalPrice:0,
                       totalCount:0
                 }
         }
                
       

        default:
                return state;
                
}

}