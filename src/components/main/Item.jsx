import React from 'react'
import {Link} from "react-router-dom"

function Item({addItem,...full }) {

        const addNewItem=()=>{
                let obj={
                        name:full.name,
                        price:full.price,
                        id:full.id,
                        image:full.image
                }
                addItem(obj)
        }

        
        return (
                <div className="info__block">
                           
                        <div className="info__img">
                                <img src={full.image} alt={full.name} />
                        </div>
                        <div className="info__tth">
                                <h2>{full.name}</h2>
                                <p>Camer--{full.camera}</p>
                                <p>Cpu--{full.cpu}</p>
                                <p>Memory--{full.memory}</p>
                                <p>Display--{full.display}</p>
                                <p>Size--{full.size}</p>
                                <p>weight--{full.weight}</p>

                             <div className="info__description">
                                     <h2>Description</h2>
                               <p> {
                                        full.description
                                }</p>


                        </div>

                        </div>
                        <div className="info__price">
                                <div>
                        <Link to="/">
                            <button className="btn btn-outline-success">Продолжать покупку</button>
                        </Link>
                        </div>
                        <div>
                        <button className="btn btn-outline-primary" onClick={addNewItem}>Добавить в карту</button>
                         </div>
                         <div>
                       <h1>Цена {full.price} $ </h1>
                         </div>


                        </div>
                        

                        
                </div>
        )
}

export default Item
