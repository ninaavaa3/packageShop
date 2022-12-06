import React, { Component } from "react";
import classes from "./Shop.module.css";

class Shop extends Component {
    myinputname = React.createRef();
    gotoShop = (event) => {
        event.preventDefault();
        const urlpath = this.myinputname.current.value;
        console.log(this.props);
        this.props.history.push(`/shop/${urlpath}`);
    }
    render() {
        return (

            <form className={classes.formst} onSubmit={this.gotoShop}>

                <h4 className={classes.textst}>Enter Shop name!</h4>
                <hr />
                <input className={classes.textst} required type="text" placeholder="shopname" ref={this.myinputname} /><br />
                <button className={classes.textst} type="submit">visit Shop!</button>


                
            </form>
        )
    }
}
export default Shop;