import React from 'react'
import {useState,useEffect,createContext} from 'react'
import axios from 'axios'
export const movieState = createContext() 
export const nameState = createContext() 
export const MovieProvider =(props)=>{
    const[movieTitle, setmovieTitle]=useState([])
  
    const[name,setname]=useState([])

    useEffect(() => {
        const api_url = 'https://api.themoviedb.org/3/';   
    const api_key =  '04c35731a5ee918f014970082a0088b1'
     axios.get(`${api_url}discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`)
     .then(response=>{

       const movielist = response.data.results;
       console.log(movielist)
     setmovieTitle(movielist)
      
    })
   
    
    }, [])
  
   
return(
    
<movieState.Provider value={[movieTitle,setmovieTitle,name,setname]}>
{props.children}
</movieState.Provider>
   
)
}


