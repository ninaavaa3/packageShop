import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import App from './Appcomponent/App';
import Shop from './Shopcomponent/shop';


class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Shop}/>
                    <Route path="/shop/:shopid" component={App}/>
                   
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;





