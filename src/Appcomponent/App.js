import React, { useState } from "react";
import Invintory from "./Invintory";
import Order from "./Order";
import Toturials from "./Toturials";
import classes from "./App.module.css";
import Angular from "../assets/Angular.svg.png";
import bootstrap from "../assets/bootstrap.png";
import nodejs from "../assets/nodejs.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import php from  "../assets/php.png"
import CssHtml from "../assets/CSShtml.svg"


const App = () => {
  const samples = [
    {
      id: 1,
      name: "javascript",
      desc:
        "javascript is a nice programming language.",
        image:javascript,
      price: 50000,
      status: "available"
    },
    {
      id: 2,
      name: "React",
      image: react,
      desc:
        "We are learning react.",
      price: 180000,
      status: "available"
    },
    {
      id: 3,
      name: "Angular",
      image: Angular,
      desc:
        "Angular is a good framework",
      price: 80000,
      status: "unavailable"
    },
    {
      id: 4,
      name: "Nodejs",
      image: nodejs,
      desc:
        "Nodejs is nice for backend. ",
      price: 200000,
      status: "available"
    },
    {
      id: 5,
      name: "PHP",
      image: php,
      desc:
        "maybe next time we will learn php",
      price: 120000,
      status: "available"
    },
    {
      id: 6,
      name: "HTML & CSS",
      image:CssHtml,
      desc:
        "We need for UI",
      price: 70000,
      status: "available"
    },
    {
      id: 7,
      name: "Bootstrap4",
      image: bootstrap,
      desc:
        "One of the best css framework",
      price: 125000,
      status: "available"
    },
  ];




  const [toturial, setToturial] = useState([]);
  const loadSample = () => {
    setToturial(samples);
  };

  const addtoturial = (newtoturial) => {
    setToturial([ ...toturial,newtoturial]);
  };
  const deleteToturial = (ab) => {
    let filteredstate = toturial.filter(obj => obj.id !== ab);
    //console.log(filteredstate);
    setToturial(filteredstate);
  }
  const[orderprice,setOrderprice]=useState([]);
  const addToCard=(a)=>{

setOrderprice([...orderprice,a]);
  }
  

  return (
    <div className={classes.cstyle}>
      <Toturials onAddTocard={addToCard} toturial={toturial} />
      <Order  Toturial={toturial} price={orderprice}/>
      <Invintory load={loadSample} toturial={toturial} addtoturial={addtoturial} OndeleteToturial={deleteToturial}
      />
    </div>
  );
}

export default App;
