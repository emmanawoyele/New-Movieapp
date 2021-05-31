import React from 'react'
import {useState,useRef, useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'
import{libraryState} from './myState/libraryState'
import Backdrop from './backdrop/backdrop'
import AddButton from './button.jsx'

 function Modal(props) {
    const {movieTitle,Favoritename}= useContext(movieState)

const[Favorite,setFavorite]=Favoritename
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
const prevstate =usePrevious(Favorite)
    // const[myfavourites, setmyfavourites]=useContext(libraryState)
useEffect(() => {
   
}, [])

// const storeMydata=(key, value)=>{
//   this.setItem(key, JSON.stringify(value));
//   console.log(key)
// }
const addMoviesHandler=(movies)=>{
 const addNewMovies = Favorite
  

// if (a.indexOf(movies) === -1){
//  const b= a.push(movies);
//  setFavorite(b)
//  console.log(a)
// }

  
    // stop  duplicate item to add to my array
    
    //   var Ourdate =  new Date()
    //   var getOurTime = Ourdate.toTimeString()
    //   console.log(getOurTime)
    //   if(index=== true){
    //     this.setState({
    //       date:getOurTime
    //     })
    //   }
    
    if(addNewMovies.includes(movies) === false){

   var b= addNewMovies.push(movies)
console.log(b)
      console.log(Favorite)
     var drophistory = JSON.parse(localStorage.getItem("movies")) || [];
    drophistory.push(movies);
    localStorage.setItem("movies", JSON.stringify(drophistory));
        // const a=  localStorage.setItem("movies",JSON.stringify(addNewMovies)) ;
//        // var b = [];
//         // b.push(JSON.parse(localStorage.getItem('movies',addNewMovies)));
//         // localStorage.setItem('movies', JSON.stringify(addNewMovies));
      }
    }
    const img_url = 'https://image.tmdb.org/t/p/w1280';


     const ModalOpener =props.show?<div className="modal_show"  onClick={props.modalhandler} style={{
        transform:props.show? 'translateY(0vh)': 'translateY(-100vh)',
   opacity:props.show ?'1': '0'}}>
       <div className="information_container" >
       <img style={{width:"100%"}} src={img_url+props.movieset.poster_path } alt={props.poster_path}/>
       <div className="more_information">
       <address>
       Title:<span>{props.movieset.original_title}</span><br/>
       Release Date:<span>{props.movieset.release_date}</span><br/>
       overview:<span>{props.movieset.overview}</span><br/>
      Language:<span>{props.movieset.original_language}</span> <br/>
      Rating:<span>{props.movieset.vote_average}</span> <br/>
           </address>
           {/* <AddButton  onClick={()=>props.HandlerAddMovies(props.title)} MoviesAdd={props.MoviesAdd}/> */}
           <AddButton  HandlerAddMovies={()=>addMoviesHandler(props.movieset)} movieset={props.movieset} />

       </div>
      
       </div>
   </div>:null

   return(
 <div>
      {ModalOpener}
  </div>

)}
export default Modal