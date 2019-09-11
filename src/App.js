import React from 'react';
import {
  HashRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import './App.css';

const Index = AsyncComponent(()=>require('./views/Index'))
const Login = AsyncComponent(()=>require('./views/Login'))

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path='/index' component={Index}></Route>
          <Route path='/login' component={Login}></Route>

          
        </div>
      </Router>
    </div>
  )
}

export default App;
