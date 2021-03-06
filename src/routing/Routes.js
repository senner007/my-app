import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Buttons from '../components/Buttons';
import Results from '../components/Results'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = function () {
  return (
    <main>
      <Switch>
        <Route path='/results' component={Results}/>
        <Route path='/buttons' component={Buttons}/>
      </Switch>
    </main>
  )
}



export default Routes
