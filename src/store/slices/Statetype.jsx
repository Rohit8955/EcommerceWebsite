import { createSlice } from "@reduxjs/toolkit";
import { mensdata } from "../../mensdata";
const Statetype = createSlice({
    name: 'state',
    initialState:{
        type:'Tshirts',
        typeitem: mensdata.filter((elem)=>elem.category==='Tshirts'),
    },
    reducers:{
        typechanged: (state,action)=>{
            state.type = action.payload;
            let arr = mensdata.filter((elem)=>{
                return elem.category === state.type 
            })
            state.typeitem = arr;
        }
    },
})

export const {typechanged} = Statetype.actions;
export default Statetype.reducer;