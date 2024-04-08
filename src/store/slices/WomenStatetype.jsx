import { createSlice } from "@reduxjs/toolkit";
import { womensdata } from "../../womensdata";
 const WomenStatetype = createSlice({
    name:'woemntype',
    initialState:{
        type:'Tshirts',
        itemtype: womensdata.filter((elem)=>elem.category==='Tshirts')
    },
    reducers:{
        itemchanged:(state,action)=>{
            state.type = action.payload;
            let arr = womensdata.filter((elem)=>elem.category===action.payload);
            state.itemtype = arr;
        }
    },
 })
 export const {itemchanged} = WomenStatetype.actions;
 export default WomenStatetype.reducer