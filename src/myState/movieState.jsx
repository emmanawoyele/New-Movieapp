import React from 'react'
import {useState,useEffect,createContext} from 'react'
import axios from 'axios'
export const movieState = createContext() 

export const MovieProvider =(props)=>{
    const[movieTitle, setmovieTitle]=useState([])
    const[Favorite,setFavorite]=useState([])

    const[searchmovie,setsearch]=useState([])
    useEffect(() => {
        const api_url = 'https://api.themoviedb.org/3/';   
    const api_key =  '04c35731a5ee918f014970082a0088b1'
     axios.get(`${api_url}discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`)
     .then(response=>{
       const movielist = response.data.results;
     setmovieTitle(movielist)
      // setFavorite(movielist)
    })
   
    
    }, [])
  
   
return(
    
<movieState.Provider value={{ moviename: [movieTitle, setmovieTitle], Favoritename: [Favorite, setFavorite],
   search:[searchmovie,setsearch]}}>

{props.children}
</movieState.Provider>
   
)
}


