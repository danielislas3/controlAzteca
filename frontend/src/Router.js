import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Hola from './components/hola'

export default function Router() {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/" component={Hola}/>
      </Switch>
    </BrowserRouter>
  )
}
