import React from 'react'
import {useState, useEffect,useContext} from 'react'
import {movieState} from './myState/movieState'
import{libraryState} from './myState/libraryState'
import Backdrop from './backdrop/backdrop'
import AddButton from './button.jsx'
 function Modal(props) {
    const [movieTitle]= useContext(movieState)

    // const[myfavourites, setmyfavourites]=useContext(libraryState)
useEffect(() => {
    console.log(props.movieset)
}, [])
const addMoviesHandler=(movies)=>{
  console.log(movies)

    // const addNewMovies = myfavourites
    // stop  duplicate item to add to my array
    
    //   var Ourdate =  new Date()
    //   var getOurTime = Ourdate.toTimeString()
    //   console.log(getOurTime)
    //   if(index=== true){
    //     this.setState({
    //       date:getOurTime
    //     })
    //   }
    
    // if(addNewMovies.includes(movies) === false) 
    //   addNewMovies.push(movies)
    //   setmyfavourites(addNewMovies)
    
    //   localStorage.setItem(movies, myfavourites);
    // console.log(myfavourites)
    
    }
    const img_url = 'https://image.tmdb.org/t/p/w1280';

  console.log(props.movieset)
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
   <Backdrop  modalhandler={props.modalhandler}  show={props.show}>
      {ModalOpener}
   </Backdrop>

)}
export default Modal