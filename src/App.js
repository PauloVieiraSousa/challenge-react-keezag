import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Example from './page/Example/Example';


export default function App (){
  return (
    <div>
      <Switch>
          <Route path="/" exact component={Example} />
          <Route path="/example" component={Example}/>
      </Switch>
    </div>
  )
}
