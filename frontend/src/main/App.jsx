import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home-page/home-page.component';

class App extends Component {
   constructor() {
      super();
      this.state= {

      }
   }

   render() {
      return(
         <Switch>
            <Route exact path = '/' component = { HomePage }></Route>
         </Switch>
      )
   }
}

export default App;