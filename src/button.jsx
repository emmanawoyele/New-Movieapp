import React from 'react'


const AddMoviesButton=(props)=>{
 
return <div className="AddButton">
<div onClick={()=>props.HandlerAddMovies()} ><i  class="fas fa-plus"></i></div>

</div>
}

export default AddMoviesButton
