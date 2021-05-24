import React from 'react'
import {useState,useEffect,createContext} from 'react'


export const libraryState = createContext() 

export const LibraryProvider =(props)=>{
    const[myfavourites, setmyfavourites]=useState([]) 
return(
< libraryState.Provider value={myfavourites,setmyfavourites}>
{props.children}
</libraryState.Provider>
   
)
}


