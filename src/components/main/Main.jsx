import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import {getFetchItems,infoAboutItem,addNewItems as addNewItemsForMain} from '../../redux/actions/showItems'
import {addItemToCart} from "../../redux/actions/cart"
import GetItems from './GetItems'
import Header from '../header/Header'
import MyLoader from './Loader'
import "./style.scss"




function Main() {

const dispatch = useDispatch()

const {items,search,isLoaded} = useSelector(({showItems}) => {
        
     return{

       items:showItems.items,
       isLoaded:showItems.isLoaded,
       search:showItems.search
}
})

const {category} = useSelector(({filter}) =>({
        category:filter.category
}))


        React.useEffect(()=>{
                if(search===""){
                dispatch(getFetchItems(category))
                }
        

        },[category,search])
        
        const info=(id)=>{
dispatch(infoAboutItem(id))   
     }

     const addItem=(obj)=>{
             dispatch(addItemToCart(obj))
     }

const addNewItems=()=>{
dispatch(addNewItemsForMain())
}


        return (
                <>
                <Header/>
                <div className="item__container">
                    { isLoaded?
                     

                        items.map((element,i)=>{
                                        
                                        return <GetItems
                                         key={element.id+i}
                                          {...element}
                                          info={info}
                                          addItem={addItem}
                                          />
                                })
                        
                             : new Array(6).fill(0).map((_,i)=><MyLoader key={i}/> )
                             }
                             {  
                items.length>5&&items.length<10?<button className="btn btn-primary" onClick={addNewItems}> Добавть товар</button>:""
                        } 
                </div>
                </>
        )
}

export default Main
