
// import React from 'react';
import React,{useContext,useState,useRef,useEffect} from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './library/library.css'
import Icon from '@material-ui/core/Icon';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DehazeIcon from '@material-ui/icons/Dehaze';
import StoreIcon from '@material-ui/icons/Store';
import Button from '@material-ui/core/Button';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SearchMovie from './search_Movie_Comp'
import {movieState} from './myState/movieState'

function Links() {
    var  b=""
    const {Favoritename}= useContext(movieState)
    const[Favorite,setFavorite]=Favoritename
    useEffect(() => {
    //    setFavorite(prevState=>prevState + Favorite)
    }, )
   
    const a = JSON.parse(localStorage.getItem("movies"))
    const leftIcon={
        width:20,
        color:"black",
        height:45 + "px",
        fontSize:30
    }
 
    if(Favorite !=0){
 b=  <div className="num">
          <span>{Favorite}</span>
      </div>
    }
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
      {b}
          <AddAlertIcon/>
              
        
          </li>
    </ul>
     
    
  </div>
        </div>
    )
}
export default Links

