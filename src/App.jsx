import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import './css/App.css'

function App () {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  )
}

export default App
