import React  from "react"
import ReactDOM  from "react-dom/client"
import {baseUrl} from './url'
// import '../notes.css'

let  Card  = ({resDetails}) => {
    return (
        <div className="cart">
            <img className="cart-img" src= {baseUrl + resDetails.info.cloudinaryImageId} />

            <div className="cart-details">

                <h3>-{resDetails.info.name}</h3>
                <h3>-{resDetails.info.cuisines} </h3>
                <h3>- {resDetails.info.avgRating} </h3>
            </div>
        </div>
    )}


    export default Card