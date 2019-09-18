import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import Index from './views/Index';
import Login from './views/Login';
import AsyncComponent from './AsyncComponent';
// import './App.css';

// const Index = AsyncComponent(()=>require('./views/Index'))
// const Login = AsyncComponent(()=>require('./views/Login'))
const List = AsyncComponent(()=>require('./views/Userlist'))
const Try = AsyncComponent(()=>require('./views/Try'))
const Qipao = AsyncComponent(()=>require('./views/Qipao'))
const Book = AsyncComponent(()=>require('./views/Book'))

const Detail = AsyncComponent(()=>require('./views/Detail'))


function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path='/index' component={Index}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/try' component={Try}></Route>
          <Route path='/qipao' component={Qipao}></Route>
          <Route path='/book' component={Book}></Route>
          {/* <Redirect to='/index'/> */}
          <Route path='/detail' component={Detail}></Route>
        </div>
      </Router>
    </div>
  )
}

export default App;
