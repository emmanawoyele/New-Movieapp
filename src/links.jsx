
// import React from 'react';
import {useState,useRef, useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'
import {Link} from 'react-router-dom';
import './library/library.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import StoreIcon from '@material-ui/icons/Store';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SearchMovie from './search_Movie_Comp'


function Links(props) {
    var a= ''
    const {movieTitle,Favoritename}= useContext(movieState)
    const[Favorite,setFavorite]=Favoritename
    
    
      
    console.log( Favorite)
  
  
    useEffect(() => {
        a = JSON.parse(localStorage.getItem("movies"))

        setFavorite(a)
        
    },[])
 
    const leftIcon={
        width:20,
        color:"black",
        height:45 + "px",
        fontSize:30
    }
 
//     if(a.length < 0){
//  b=  <div className="num">
//           <span>{a.length}</span>
//       </div>
//     }
    return (
    <div className="navLinks">

     <div className="leftIcons">
       <ul >
   <li>
   <Link to="/">
       <DehazeIcon style={leftIcon}>
   Home
   </DehazeIcon >
   </Link>
  </li>
  <li>
  <Link to="/library"><StoreIcon style={leftIcon}/></Link>
  </li>
   </ul>
            </div>

<div className="Search" style={{width:60 + "%"}}>
<SearchMovie />{/* <form  className="example"action="" >
    <div className="Fromcontrol">
    <input type="text"></input>
    <Button/>
    </div>
    

</form> */}
</div>
<div className="leftIcons">
    <ul>
        <li><VideoCallIcon/></li>
        <li><ViewModuleIcon/></li> 
     
      <li>
      <div className="num">
          <span>{Favorite.length}</span>
      </div>
          <AddAlertIcon/>
              
        
          </li>
    </ul>
     
    
  </div>
        </div>
    )
}
export default Links

