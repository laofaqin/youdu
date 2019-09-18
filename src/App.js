import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
// import Index from './views/Index';
import Login from './views/Login';
import AsyncComponent from './AsyncComponent';
import Detail from './views/Detail';
import Card from './views/Card';
import Edituser from './views/Edituser';

const Index = AsyncComponent(()=>require('./views/Index'))
// import Banner from './views/Banner';

const Add = AsyncComponent(()=>require('./views/Add'))


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
          {/* <Route path='/banner' component={Banner}></Route> */}
          <Redirect from='/' to='/login'/>
        </div>
      </Router>
    </div>
  )
}

export default App;
