import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

import {filter} from '../../redux/actions/filter'
import {serchPhone} from '../../redux/actions/showItems'
import "./Header.scss"


function Header() {


 const category=["Apple","Samsung","HTC","Lenovo",'Nokia']

 const [value,setValue]=React.useState("")

 
const dispatch = useDispatch()

const {totalCount,totalPrice} = useSelector(({addItemsToCart}) => {
        return{
                totalCount:addItemsToCart.totalCount,
                totalPrice:addItemsToCart.totalPrice
        }
})


const {filterCategory} = useSelector(({filter}) => {
        return{
                filterCategory:filter.category,
        }
})


const searchPhone=(e)=>{
        setValue(e.target.value)

}

React.useEffect(()=>{
dispatch(serchPhone(value))


},[value])


const filterItems=(id)=>{
dispatch(filter(id))
}
 

        return (
                <div className="main">
                <div className="header">
                        <Link to='/cart'>
               <button className="btn btn-primary">{totalCount} item(s) | {totalPrice} $ </button>
               </Link>
               <input type="text" value={value} className="header__input"  onInput={searchPhone} /> 
                      

                       
                
                        
                </div>
                <div className="menu">
                        <ul>
                                <li onClick={()=>filterItems(null)}
                                className={filterCategory===null?"active":""}
                                
                                >Все</li>
                        {
                                category.map((element,i)=>{
                                        return <li
                                         key={i}
                                         onClick={()=>filterItems(i+1)}
                                         className={filterCategory===i+1?"active":""}
                                         >
                                                 {element}</li>
                                })

                        }
                        </ul>


                </div>
                </div>
        )
}

export default Header
