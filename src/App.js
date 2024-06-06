
import './App.css';
import Home from './Home';
import {useDispatch,useSelector} from "react-redux"
function App() {
  const dispatch=useDispatch()
  const {value}=useSelector(state=>state.data)

const addvalue=()=>{
  dispatch({
type:"increasevalue"

})}
const subvalue=()=>{
dispatch({
  type:"decreasevalue"
})
}
const addbypayload=()=>{
  dispatch({
    type:"addbypayload",
    payload:20
  })
}
  return (

<div>
     
  {value}
    <button onClick={addvalue}>add</button>
    <button onClick={subvalue}>sub</button>
    <button onClick={addbypayload}>payload</button>

  
      {/* <Home /> */}
    </div>
  );
}

export default App
