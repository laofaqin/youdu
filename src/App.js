import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import Index from './views/Index';
// import Login from './views/Login';
import AsyncComponent from './AsyncComponent';
// import './App.css';

const Index = AsyncComponent(()=>require('./views/Index'))
const Login = AsyncComponent(()=>require('./views/Login'))
const Test = AsyncComponent(()=>require('./views/Test'))
const Userlist = AsyncComponent(()=>require('./views/Userlist'))
const Try = AsyncComponent(()=>require('./views/Try'))


function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path='/index' component={Index}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/test' component={Test}></Route>
          <Route path='/list' component={Userlist}></Route>
          <Route path='/try' component={Try}></Route>
          
        </div>
      </Router>
    </div>
  )
}

export default App;
