import React,{useContext,useState,useEffect} from 'react'
import {movieState} from './myState/movieState'
import Backdrop from './backdrop/backdrop'
import Card from 'react-bootstrap/Card'
import SearchMovie from './search_Movie_Comp'
import Modal from './modal'
import Link from  './links'



 function Movie_component() {

    const img_url = 'https://image.tmdb.org/t/p/w1280';
     const {moviename,Favoritename}= useContext(movieState)
     const [movieTitle]=moviename
    
     const[movies,setmovies]=useState([])
     const[show,setshow]=useState(false)

    //  function usePrevious(value) {
    //     const ref = useRef();
    //     useEffect(() => {
    //       ref.current = value;
    //     });
    //     return ref.current;
    //   }
    //   const prevstate =usePrevious(show)

   
    useEffect(() => {
     
        console.log("1:mount once")
        
    },[])

  useEffect(() => {
     
      return () => {
         
        console.log("2:mount twice")
      }
  }, )
  useEffect(() => {
     
   
      console.log("3:mount thrice")
    
}, )
     const openmodalHandler=(movies)=>{
        setmovies(movies)
           setshow((prev)=>!prev)    


}

   const closeModalHanler=()=>{
setshow(false)
   }
    return (
        <>
    
        <div style={{background:"#272532"}} className="container"  >
            <div  className="search_container"  >
    
                <SearchMovie />
            </div>
            <Modal movieset={movies} show={show} ></Modal>
            <Backdrop    show={show} closeModalHanler={closeModalHanler}>
                
               
   
   </Backdrop>

           
            <div className=" movie_box" >
         
      {movieTitle.filter(m=>m.backdrop_path).map((movies,index)=>{
        
          return<Card key={index}  onClick={()=>openmodalHandler(movies)} >
              <img src ={img_url+movies.backdrop_path} alt={movies.original_title}/>
              <div className="movie_info">
  <h3>{movies.original_title}</h3>
  <h3 style={{background:"#272532"}}className={movies.vote_average <=8?"blue":"red"}>{movies.vote_average}</h3>
  </div>  
          </Card>
         
      
      })}
   
</div>

        </div>
        </>

    )
    
}
export default Movie_component