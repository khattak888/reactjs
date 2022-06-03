import React from 'react'

const LiftingState = (props) => {
  return (
    <div>
       <h1> {props.data}</h1>
       <button onClick={()=>props.removeItem(props.id)}>Remove button</button>

    </div>
  )
}

export default LiftingState