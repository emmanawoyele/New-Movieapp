
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
    let b=""
    const {movieTitle,Favoritename}= useContext(movieState)
    const[Favorite,setFavorite]=Favoritename
    
console.log(Favorite)
  
  
   
useEffect(() => {
const a =JSON.parse(localStorage.getItem("movies"))||[]
if(a!==null){
    for(var b=0 ; b<a.length;b++){
        setFavorite(a)
        }
}else if(a===null){
    localStorage.setItem("movies", JSON.stringify([]))
}

//  Favorite.push(a)
//   setFavorite(a)
   
// setFavorite(a )
    // return () => {
       
    //     if(a){
    //         for(var i=0; a.length<0;i++){
            
    //         }
     
    //     }else{
    //         return ""
    //     }
    // }
}, [])

useEffect(() => {
    
    return () => {
        
    }
}, [])

       if(Favorite!=null){
    b=<span>{Favorite.length}</span> 
       }else{
           return ""
       }

    const leftIcon={
        width:20,
        color:"black",
        height:45 + "px",
        fontSize:30
    }

    // if(Favorite!==null){
    //     b=Favorite.length
    // }else{
    //    return ''
    // }
//  var b
//     if(a.length>0){
//   return b=<span>{a.length}</span>
//     }else{
//         return ''
    // }
// const linknumm =  <div className="num">
{/* <span>{Favorite.length}</span> */}
// </div>
// if(Favorite!="")
// b = <div className="num">
// <span>{Favorite.length}</span> 
// </div> 
    return (
    <div className="navLinks">

     <div className="leftIcons">
       <ul >
   <li>
   <Link to="/">
       <DehazeIcon >
   Home
   </DehazeIcon >
   </Link>
  </li>
  <li>
  <Link to="/library"><StoreIcon /></Link>
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
       
      <div className="num" style={Favorite.length ===0  ?{display:'none'}:{display:'block'}}>
<span>{b}</span>
</div>
   
          <AddAlertIcon/>
              
        
          </li>
    </ul>
     
    
  </div>
        </div>
    )
}
export default Links

