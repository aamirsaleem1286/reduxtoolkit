// import { configureStore } from "@reduxjs/toolkit";
// import customReducer from './Reducer';
// const store=configureStore({
// reducer:{
//     custom:customReducer
// }

// })

// export default store










import { configureStore } from '@reduxjs/toolkit';
import valuereducer from './Reducer';


const storevalue= configureStore({
reducer:{
    data:valuereducer
}
})

export default storevalue





















