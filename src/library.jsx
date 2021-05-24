import React from 'react'
import SearchMovie from './search_Movie_Comp'
import {useState, useEffect,useContext} from 'react'
import {libraryState} from './myState/libraryState'
import {movieState} from './myState/movieState'


 function Library(props){
  // const[]= useContext(movieState)
  console.log()
//   for(var i=0; i<myfavourites.length; i++){
// console.log(myfavourites)
//   }

  const img_url = 'https://image.tmdb.org/t/p/w1280';
 
    return (
        <div className="container">
          <div className="library_box">
            <h2>Favorite movies</h2>
           <div className="library_container">
              <div className="box">
               
                {/* <img src={url}></img> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div>

               <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div>

               <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div>
               <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate et tempora voluptate facilis? Accusamus, odio? Exercitationem perferendis distinctio labore ipsa nemo molestiae!
               Neque odit ipsum vel assumenda quae enim!</p>
               </div>
          </div>
          </div>
        </div>
    )
}
export default Library