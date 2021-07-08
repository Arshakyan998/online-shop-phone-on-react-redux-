import React from "react";
import { Route,Switch } from "react-router";

import Main from "./components/main/Main";
import Info from './components/main/Info'
import Cart from "./components/cart/cart";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Switch>
     
      <Route path="/" component={Main} exact/>
      <Route path="/info" component={Info} />
      <Route path="/cart" component={Cart} />



      </Switch>
    </div>
  );
}

export default App;
