import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieComponet from './movie_component'
import Library from './library'
import {MovieProvider} from './myState/movieState'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MyLinks from './links'
import Backdrop from './backdrop/backdrop'




function App() {
  return (
    
    <MovieProvider>
      
    {/* <div className="search_container"> */}
  
      
    
      <Router>
   <MyLinks/>   
   <Switch>

   <Route path ="/"  exact component={MovieComponet}/>
  
     
 <Route path ="/library"  component={Library} />

   </Switch>
 
   </Router>
      
   
  </MovieProvider>
  );
}

export default App;
