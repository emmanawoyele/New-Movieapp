import React from 'react'
import {useState,useRef, useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'
import  Link from './links'
import AddButton from './button.jsx'
import { Prev } from 'react-bootstrap/esm/PageItem'

 function Modal(props) {
    const {movieTitle,Favoritename}= useContext(movieState)

    const[Favorite,setFavorite]=Favoritename
const [a,seta]=useState()
useEffect(() => {

}, [])
// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }
// const prevstate =usePrevious(Favorite)



const addNewMovies = Favorite




const addMoviesHandler=(movies)=>{
console.log(movies)
// var drophistory = JSON.parse(localStorage.getItem("movies")) || [];
// if (drophistory.includes(movies) === false){
//   // addNewMovies.push(movies)
//   console.log(movies)
//   // var drophistory = JSON.parse(localStorage.getItem("movies")) || [];
//   drophistory.push(movies)
//     setFavorite( drophistory)
  
//   localStorage.setItem("movies",JSON.stringify(drophistory) );
  
// }


  var drophistory = JSON.parse(localStorage.getItem("movies")) || [];

  if(addNewMovies.indexOf(movies)===-1){
    addNewMovies.push(movies);
  var drophistory = JSON.parse(localStorage.getItem("movies")) || [];
      drophistory.push(movies);
      setFavorite(drophistory)
      localStorage.setItem("movies", JSON.stringify(drophistory))
  }


  
  










  
    // stop  duplicate item to add to my array
    
    //   var Ourdate =  new Date()
    //   var getOurTime = Ourdate.toTimeString()
    //   console.log(getOurTime)
    //   if(index=== true){
    //     this.setState({
    //       date:getOurTime
    //     })
    //   }
    

//       }

    }
    useEffect(() => {
      
      },)
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
           <AddButton  HandlerAddMovies={()=>addMoviesHandler(props.movieset,props.movieset.poster_path ,props.movieset)} movieset={props.movieset} />

       </div>
      
       </div>
   </div>:null

   return(
 <div>

      {ModalOpener}
  </div>

)}
export default Modal