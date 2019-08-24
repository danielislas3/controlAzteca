import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import index from './components/index'
import hola from './components/hola'

export default function Router() {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={index}/>
      <Route exact path="/hola" component={hola}/>
      </Switch>
    </BrowserRouter>
  )
}
