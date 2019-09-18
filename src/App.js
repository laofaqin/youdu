import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
// import Index from './views/Index';
import Login from './views/Login';
import AsyncComponent from './AsyncComponent';
import Detail from './views/Detail';
import Card from './views/Card';
import Edituser from './views/Edituser';

const Index = AsyncComponent(()=>require('./views/Index'))
const Add = AsyncComponent(()=>require('./views/Add'))

// const Detail = AsyncComponent(()=>require('./views/Detail'))

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path='/index' component={Index}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/add' component={Add}></Route>
          <Route path='/card/:id' component={Card}></Route>
          <Route path='/detail/:id' component={Detail}></Route>
          <Route path='/edit/:id' component={Edituser}></Route>
          {/* <Redirect from='/' to='/index'/> */}
        </div>
      </Router>
    </div>
  )
}

export default App;
