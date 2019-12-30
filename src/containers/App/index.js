import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {Home, NotFound, Categories , Topics} from '../'
class App extends Component {
  constructor() {
    super();
    // initfirebase();
  }
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cat" component={Categories}/>
            <Route exact path="/topic/:id" component={Topics}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App
