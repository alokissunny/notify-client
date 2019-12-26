import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound, Categories , Topics} from '../'
import {initfirebase} from '../../config/initfirebase';
class App extends Component {
  constructor() {
    super();
    // initfirebase();
  }
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <div>HEADER</div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cat" component={Categories}/>
            <Route exact path="/topic/:id" component={Topics}/>
            <Route component={NotFound}/>
          </Switch>
          <div>FOOTER</div>
        </div>
      </div>
    )
  }
}

export default App
