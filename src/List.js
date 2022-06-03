import React from 'react'
import Teamdata from './Teamdata'

const listItems = [1,2,3,4,5] 
const List = () => {
  return (
   <>
   {
       Teamdata.map((team , index)=>
       <div key={team.id} style={{marginTop:'40px'}}>
           <span>ID:{team.id}</span><br /><br />
           <span>NAME:{team.name}</span><br /><br />
           <span>EMAIL:{team.email}</span><br /><br />

       </div>


       )
   }
   
   </>
  )
}

export default List