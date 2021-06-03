import React from 'react'
import { useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'
import DeleteIcon from '@material-ui/icons/Delete'


 function Library(){



  const {Favoritename}= useContext(movieState)
  const[Favorite]=Favoritename
 const handleRemoveMovies=(e)=>{

console.log(e)
    // let deletemovies= this.state.MoviesAdd.filter((title,id)=>{
    //   title=title!==e
    //     return title
    // }) 
    // this.setState({
    //   MoviesAdd:deletemovies,
    // })
  
  
  }

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
  const img_url = 'https://image.tmdb.org/t/p/w1280';
 const movieslist=Favorite.map((fav)=>{

return<div>
 <div className="box" key={fav.id} onClick={()=>handleRemoveMovies(fav)} >
  <img src={img_url + fav.poster_path} alt={fav.original_title}></img>
</div>
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
               {/* <div className="btnDelete">
     <DeleteIcon/>
   </div> */}
          </div>
          </div>
        </div>
    )
}
export default Library