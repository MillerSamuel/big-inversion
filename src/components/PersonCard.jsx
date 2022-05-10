import React from 'react'

const PersonCard =(props)=>{
        let {fname, lname,age,hairColor}=props
        return <div>
            <h2>{lname}, {fname} </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    }


export default PersonCard