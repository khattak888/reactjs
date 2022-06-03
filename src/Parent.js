import React, { useState } from 'react'
import LiftingState from './LiftingState'

const Parent = () => {
    const [user , setUser] = useState([
        "bilal",
        "usama",
        "khattak",
        "hashim",
        "baba",
        "haroon",
        "abdullah bhai"
    ])
    const deleteItem = (deleteID) => {
        // console.log("deleteItem")
        const finalUser = user.filter((value,id)=>{
            return id != deleteID
        })
        setUser(finalUser)
    }
  return (
    <>
    {
        user.map((value , index)=>{
            return(
                <div key={index}>
                    <LiftingState data={value} id={index} removeItem={deleteItem} />
                </div>
            )
        })
    }
 
    
    </>
  )
}

export default Parent