import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieComponet from './movie_component'
import Library from './library'
import   SearchMovie from './search_Movie_Comp'
import {MovieProvider} from './myState/movieState'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import MyLinks from './links'
import Modal from './modal'



function App() {
  return (
    
    <MovieProvider>
      
    {/* <div className="search_container"> */}
  
      {/* </div>   */}
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
