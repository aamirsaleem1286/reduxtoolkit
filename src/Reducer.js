// import { createReducer } from '@reduxjs/toolkit';


// const initalState={
// c:0,
// }

// const customReducer=createReducer(initalState,{
// increment:(state,action)=>{
//     state.c=state.c+1
// },
// incrementByUser:(state,action)=>{

// state.c=state.c+action.payload
// },
// decrement:(state,action)=>{
//     state.c=state.c-1
// }


// })
// export default customReducer;









import { createReducer } from '@reduxjs/toolkit';
const initialvalue={
    value:5
}
const valuereducer= createReducer(initialvalue,{
   increasevalue:(state)=>{
    state.value=state.value+5
},
    decreasevalue:(state)=>{
        state.value=state.value-3
    },
    addbypayload:(state,action)=>{
        state.value=state.value+action.payload
    }
})

export default valuereducer