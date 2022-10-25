import { createSlice } from "@reduxjs/toolkit";


let initialState= {
    credentiels: [],
    type: 'phygital',
    OneCred: []
}




export const CredentielsSlice = createSlice({
    name: 'credentielSlice',
    initialState,
    reducers: {
        updateCredentiels(state, action){
            return {
                ...state,
                credentiels: action.payload
            }
        },
        updateType(state,action){
            return {
                ...state,
                type: action.payload
            }
        },
        updateOneCred(state,action){
            return {
                ...state,
                type: action.payload
            }
        },
    }
})


export const {updateCredentiels, updateType, updateOneCred} = CredentielsSlice.actions

export default CredentielsSlice.reducer;