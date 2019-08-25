import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Hola from './components/Hola'
import Ingreso from './components/Ingreso';
import Gastos from './components/Gastos';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Hola} />
        <Route exact path="/:id/ingresos" component={Ingreso}/>
        <Route exact path="/:id/gastos" component={Gastos}/>
      </Switch>
    </BrowserRouter>
  )
}
