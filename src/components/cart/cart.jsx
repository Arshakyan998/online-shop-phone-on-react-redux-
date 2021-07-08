import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom'

import {clearCart} from '../../redux/actions/cart'
import CartItems from './CartItems'
import './style.scss'
function Cart() {
        const dispatch = useDispatch()
        const  {state,totalPrice,totalCount} = useSelector(({addItemsToCart}) => {
             return {

              state:addItemsToCart.items,
              totalPrice:addItemsToCart.totalPrice,
              totalCount:addItemsToCart.totalCount

        }
        })

        const removeAllItems=()=>{
                if(window.confirm("Вы действительно хотите очистить карзину ?")){
                dispatch(clearCart())
                }
        }

        let items=Object.values(state).map(element=>{
                return element.item[0]
        })
        const checkOut=()=>{
                let result;
                items.length&&items.forEach(element=>{
                        result+= JSON.stringify(element)
                })
                result&&alert(result)
        }
        
        return (
                <div className="main__cart">
                        <div>
                        <h1>Корзина</h1>
                        <h4 onClick={removeAllItems}>очистить карзину </h4>
                    </div>
    

                        {

                               items.length? items.map((element)=>{
                                        return <CartItems key={element.id} {...element} totalPrice={totalPrice}/>
                                }):<div style={{textAling:"center",}}>Вы еще нечего не добавили в карзину </div>
                        }
                        <div>
                        <Link to="/">
                                <button className="btn btn-secondary btn-lg">Вернутся назад</button>
                        </Link>
                        <button className="btn btn-success" style={{color:"#fff"}} onClick={checkOut}>checkOut</button>
                        <h4>общая стоимость {totalPrice}$   Количство {totalCount}штук </h4>
                    </div>
                </div>
        )
}

export default Cart
