import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './reducers'
import CredentielsSlice from './credentielsData';



const store = configureStore({
    reducer: reducers
})



export default store;