export const addItemToCart=(val)=>({
        type:"ADD_ITEM_TO_CART",
        payload:val
})

export const addNewItemToCart=(val)=>({
        type:"ADD_NEW_ITEM_TO_CART",
        payload:val
})
export const  removeItemOfCart=(val)=>({
        type:"REMOVE_ITEM",
        payload:val
})

export const  deleteItem=(val)=>({
        type:"DELETE_ITEM",
        payload:val
})

export const  clearCart=()=>({
        type:"CLEAR_CART",
})