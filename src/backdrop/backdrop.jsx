import React from 'react'

function Backdrop(props){

    const showBackdrop=props.show?<div className='backdrop' onClick={props.modalhandler}>{props.children}</div>:null

   return(
       <div>
           {showBackdrop}
       </div>
       
    )
}
export default Backdrop