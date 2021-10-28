import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Random from './pages/Random'
import SingleMeal from './pages/SingleMeal'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
     <Router>
       <Navbar />
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/about">
          <About />
         </Route>
         <Route path="/random">
          <Random />
         </Route>
         <Route path="/meal/:id">
           <SingleMeal />
         </Route>
         <Route path="*">
           <Error />
         </Route>
       </Switch>
     </Router>
    </div>
  )
}

export default App
