import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ModalShop from "./pages/ModalShop";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:Id" component = {ModalShop}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
