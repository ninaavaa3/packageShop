import React from 'react'
import classes from './Child.module.css';
const Order = (props) => {
    let totalamount = 0;

    return (
        <div className={classes.child}>
            <h1>order</h1>
            {props.price.map(obj => { totalamount += obj.price; return (<div style={{ display: "flex" }}><p>{obj.name}</p><p>: {obj.price} </p></div>) })}
            <hr color="black" />
            <p>TotalAmount:{totalamount}</p>
        </div>
    )
}




export default Order;