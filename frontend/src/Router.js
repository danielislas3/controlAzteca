import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Hola from './components/hola'
import Dashboard from './components/Dashboard'
import Credito from './components/CreditoStatus'

export default function Router() {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/" component={Hola}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/credito" component={Credito}/>
      </Switch>
    </BrowserRouter>
  )
}
