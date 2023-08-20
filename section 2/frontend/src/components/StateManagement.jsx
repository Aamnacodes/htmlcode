import React,{useState } from 'react'

const StateManagement = () => {
    let count =1;
    const [likes ,setLikes] =useState(1);
  return (
    <div className='container'>
        <h1 className='text-center'>StateManagement</h1>
        <hr/>

        <button className='btn btn-primary mt-4'
        onClick={() => {
            count++;
            console.log(count);
        }}
        >Add Count</button>
        </div>
  )
}

export default StateManagement;