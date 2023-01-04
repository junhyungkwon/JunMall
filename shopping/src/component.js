import React, { useState } from "react"
import data from './data';

function Main(props) {
    let [shop, Setshop] = useState(data);


    return(
    <div className="col-md-4">

    

    <img src='https://user-images.githubusercontent.com/78072931/210526606-d26a9e11-c226-41c6-9b53-ee1f93d2a184.png'  width="60%"/>
    <h4> {shop[0].title} </h4>
    <p> {shop[0].content} </p>
    <p> {shop[0].price} </p>
    </div>)
}

export default Main;
