import React from 'react';
import classes from './Child.module.css';
import AddToturial from './AddToturial';
import EditToturialForm from './EditToturialForm';
const Invintory = (props) => {
    return (
        <div className={classes.child}>
            <h1>Invintory</h1>
            {props.toturial.map((obj, index) => <EditToturialForm key={index} toturial={obj} deleteToturial={props.OndeleteToturial} />)}
            <AddToturial addtoturial={props.addtoturial} />
            <button className="btn btn-outline-secondary" onClick={props.load}>load sample</button>
        </div>
    )
}

export default Invintory;