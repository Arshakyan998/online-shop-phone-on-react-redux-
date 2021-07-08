import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

import Item from './Item'
import {addItemToCart} from '../../redux/actions/cart'
function Info() {
       const  dispatch = useDispatch()

        const item = useSelector(({showItems}) => showItems.item)

        const addItem=(obj)=>{
                dispatch(addItemToCart(obj))
        }



        
        return (
                <div>
                        {
                               item.length? 
                                 <Item {...item[0]} addItem={addItem} />
                              :<> <Link to="/"> <h1>404</h1> 
                                <button className="btn">Back</button></Link></>
                        }
                </div>
        )
}

export default Info
