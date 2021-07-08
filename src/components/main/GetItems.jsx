import React from 'react'
import { Link } from 'react-router-dom';

function GetItems({name,price,image,id,description,cpu,camera,memory,display,size,weight,info,addItem}) {

const showInformation=()=>{
        info(id);

}

const addItemToCart=()=>{
        let obj={
                name,
                price,
                id,
                image,
                description,
                camera,
                cpu,
                memory,
                display,
                size,
                weight
                

        }
        addItem(obj)
}

        return (
                <div className="item__main">
                        <div className="item__img">
                                <img src={image} alt={name} />


                        </div>
                        <div className="item__name"> {name}</div>
                        <div className="item__description">
                                 {description.slice(0,102)}... 
                        </div>
                        <div className="item__price">
                                <h3>Цена {price}$</h3>
                        </div>

                        
                        <div className="item__btn">
                                <button className="btn btn-primary"  onClick={addItemToCart}>Добавить в карту</button>
                                <Link to="info">
                                <button className="btn btn-success" onClick={showInformation}>информация</button>
                                </Link>
                        </div>


                        
                </div>
        )
}

export default GetItems
