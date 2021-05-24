import React from 'react'
import {useState,useContext} from 'react'
import {movieState} from './myState/movieState'
import axios from 'axios'


function Search(props){

const[name,setname]=useState('')
const[number,setnumber]=useState('')
const [text,settext]=useState('')
const [movieTitle,setmovieTitle]= useContext(movieState)


const searchMovies=(e)=>{
    e.preventDefault();
    const api_url = 'https://api.themoviedb.org/3/';
    const api_key =  '04c35731a5ee918f014970082a0088b1'   
    axios.get(`${api_url}search/movie?&api_key=${api_key}&query=${name}`).then(res=>{
      let search_movies= res.data.results
      console.log(res.data.results)
   let  Items=  search_movies.filter((backdrop)=>{
return backdrop.backdrop_path!=null

      })
  
    setmovieTitle(Items)
   
    setnumber(Items.length)
   settext('movies found')

    })
    const changevalue=()=>{
        e.preventDefault();
        setname(e.target.value)
    }
  changevalue()
  }
  
 
let moviefound;
if(movieTitle.length !==0){
   moviefound=<h2 style={{color:'white'}}>{number} {text} </h2>
}else if(movieTitle.length<=0){
    moviefound=<h2 style={{color:'white'}}> {number} {text} </h2>

}

    return <div >
<form  className="example"action="" onSubmit={searchMovies}>
    <input type="text" onChange={searchMovies} value={name} placeholder="Search.." name={name} ></input>
  

</form>
{moviefound} 
    </div>
    }
    export default Search