import React from 'react';
import classes from './Child.module.css';


const Toturials = (props) => {
    const product = (a) => {
        props.onAddTocard(a)
    }

    return (
        <div className={classes.child}>

            <h1>Toturials</h1>
            {props.toturial.map((obj, key) => {
                return(
             
                     
                    <div>
                        <div className={classes.productname}>
                    <img src={obj.image} className={classes.imgstyle} />
                        <h2>{obj.name}</h2>
                        </div>
                        <div><b>price:</b> {obj.price}</div>
                        
                        <button onClick={() => product(obj)} className="btn btn-outline-secondary">Add to Cart</button>
                        <hr color='black' />
                    </div>
               )
            })}
        </div>
    )
}

export default Toturials;          