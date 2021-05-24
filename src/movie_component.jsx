import React,{useContext,useState} from 'react'
import {movieState} from './myState/movieState'
import{LibraryState} from './myState/libraryState'
import Card from 'react-bootstrap/Card'
import SearchMovie from './search_Movie_Comp'
import {MovieProvider,} from './myState/movieState'
import Modal from './modal'





 function Movie_component(props) {

    const img_url = 'https://image.tmdb.org/t/p/w1280';
     const [movieTitle,setmovieTitle]= useContext(movieState)
     const[movies,setmovies]=useState([])
     const[show,setshow]=useState(false)

     const openmodalHandler=(movies)=>{
        setmovies(movies)
                if(show===false){
            setshow(true)
        }else{
    setshow(false) 
    
}


}
   
    return (
        <div style={{background:"#272532"}} className="container"  >
            <div  className="search_container"  >
    
                <SearchMovie />
            </div>
                 <Modal movieset={movies} show={show}  ></Modal>
            
           
            <div className=" movie_box" >
         
      {movieTitle.filter(m=>m.backdrop_path).map((movies,index)=>{
        
          return<Card key={index}  onClick={()=>openmodalHandler(movies)} >
              <img src ={img_url+movies.backdrop_path}/>
              <div className="movie_info">
  <h3>{movies.original_title}</h3>
  <h3 style={{background:"#272532"}}className={movies.vote_average <=8?"blue":"red"}>{movies.vote_average}</h3>
  </div>  
          </Card>
         
      
      })}
   
</div>

        </div>

    )
}
export default Movie_component