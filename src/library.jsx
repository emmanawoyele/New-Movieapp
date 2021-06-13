import React from 'react'
import { useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'
import DeleteIcon from '@material-ui/icons/Delete'


 function Library(){



  const {Favoritename}= useContext(movieState)
  const[Favorite,setFavorite]=Favoritename
 

  // var items = JSON.parse(localStorage.getItem('movies'));
  // for (var i = 0; i < items.length; i++) {
  //   var object = JSON.parse(items[i]);
  //    if(object.request_id == 3){
  //      console.log(items) 
  //      delete items[i] // slice doesn't work not sure why
  //      console.log(items)
  //    }     
  // }

 
   

//   for(var i=0; i<myfavourites.length; i++){
// console.log(myfavourites)
//   }

useEffect(() => {

}, [])


var a = JSON.parse(localStorage.getItem("movies"))
console.log(a)
const handleRemoveMovies=(e)=>{
  var target = e;  
  console.log(a)   
   for(var i = 0; i < a.length; i++){ 
     if (a[i] === target){ 
    a.splice(i, 1);
      setFavorite(a)
      const savedelete=localStorage.setItem("movies", JSON.stringify(a));
     }}}
     var movieslist
  const img_url = 'https://image.tmdb.org/t/p/w1280';
  if(a!=undefined){
   movieslist =a.map((fav)=>{
      return<div key={fav.id} className="movieContainer">
       <div className="box" key={fav.id}  >
        <img src={img_url + fav.poster_path} alt={fav.original_title}></img>
      </div>
      <div className='deleteBtn'onClick={()=>handleRemoveMovies(fav)}>
        <span className="deletespan">Delete</span>
        </div>
       <div className="title">
       {fav.original_title}
       <span></span>
       <span></span>
       <span></span>
       </div>
      
       </div>
       })
  }else{
    return null
  }
 
    return (
        <div className="container">
          <div className="library_box">
            <h2 >Favorite movies</h2>
           <div className="library_container">
              
               {/* <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div> */}

               {/* <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div>
               <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div> */}
               {movieslist}
               {/* <div className="btnDelete">
     <DeleteIcon/>
   </div> */}
          </div>
          </div>
        </div>
    )
}
export default Library