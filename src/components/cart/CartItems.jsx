import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {addNewItemToCart,removeItemOfCart,deleteItem as deleteItemOfCart} from '../../redux/actions/cart'

function CartItems({name,image,id}) {
        const dispatch = useDispatch()
        const state = useSelector(({addItemsToCart}) => addItemsToCart.items)

        const addItemToCart=()=>{
     dispatch(addNewItemToCart(id))
        }

         const removeItem=()=>{
                 dispatch(removeItemOfCart(id))
         }

         const deleteItem=()=>{
                 if(window.confirm("Вы действительно хотите удалить товар?")){
             dispatch(deleteItemOfCart(id))
         }}
        return (
               
                <div className="cart">
                        
                      <img src={image} alt={name} />
                      <h1>{name}</h1>
                      <h2>{state[id].itemsPrice} $</h2>
                      <button onClick={addItemToCart} className="btn btn-outline-primary">+</button>
                      <span>{state[id].itemsCount}</span>

                      <button onClick={removeItem} className="btn btn-outline-primary">-</button>
                      <button onClick={deleteItem} className="btn btn-outline-danger">x</button>
                        
                </div>
             
        )
}

export default CartItems
