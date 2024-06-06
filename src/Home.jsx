import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Home = () => {
const value=20
const dispatch=useDispatch() 
const {c}=useSelector(state=>state.custom)
const add=()=>{
dispatch({
    type:"increment"
})
}
const sub=()=>{
dispatch({
    type:"decrement"
})

}
const addbyvalue=()=>{
    dispatch({
        type:"incrementByUser"
        ,payload:25
    })
}

return (
    <div>
        <p>{c}</p>
        <button onClick={add}>increment</button>
        <button onClick={sub}>decrement</button>
        <button onClick={addbyvalue}>Add by user</button> 
    </div>
  )
}

export default Home