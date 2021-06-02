import React from 'react'
import { useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'


 function Library(){



  const {Favoritename}= useContext(movieState)
  const[Favorite]=Favoritename
 

   

//   for(var i=0; i<myfavourites.length; i++){
// console.log(myfavourites)
//   }

useEffect(() => {

}, [])

const a = JSON.parse(localStorage.getItem("movies"))


  const img_url = 'https://image.tmdb.org/t/p/w1280';
 const movieslist=a.map((fav)=>{

return <div className="box" key={fav.id} >
  <img src={img_url + fav.poster_path} alt={fav.original_title}></img>
  <div className="title">
    <p>{fav.original_title}</p>
    </div>

</div>

 })
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
          </div>
          </div>
        </div>
    )
}
export default Library