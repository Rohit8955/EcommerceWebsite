import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:'cart',
    initialState:{
        wishlist:[],
        cart:[],
        amount:0
    },
    reducers:{
        addtowishlist: (state,action)=>{
            const index = state.wishlist.findIndex((item)=>item.id===action.payload.id);
            if(index!==-1){
                const arr = state.wishlist.filter((item)=>item.id!==action.payload.id);
                state.wishlist = arr
            }
            else{
                state.wishlist.push(action.payload);
            }
        },
        removefromwishlist:(state,action)=>{
            const arr = state.wishlist.filter((elem)=>elem.id!==action.payload.id);
            state.wishlist = arr;
        },
        addtocart:(state,action)=>{
            state.amount += action.payload.price
            const index = state.cart.findIndex((item)=>item.id===action.payload.id);
            if(index!==-1){
                let arr = state.cart;
                arr[index] = {...arr[index],quantity:arr[index].quantity+1}
                state.cart = arr;
            }
            else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removefromcart: (state,action)=>{
            state.amount -= action.payload.price
            const arr = state.cart.filter((item)=>item.id!==action.payload.id);
            state.cart = arr;
        },
        increasequanity:(state,action)=>{
            state.amount += action.payload.price
            const index  = state.cart.findIndex((item)=>item.id===action.payload.id);
            const arr = state.cart;
            arr[index] = {...arr[index],quantity:arr[index].quantity+1};
            state.cart = arr;
        },
        decreasequantity:(state,action)=>{
            state.amount -= action.payload.price
            const index  = state.cart.findIndex((item)=>item.id===action.payload.id);
            let arr = state.cart;
            if(arr[index].quantity===1){
                arr = state.cart.filter((item)=>item.id!==action.payload.id);
                state.cart = arr;
            }
            else{
                arr[index] = {...arr[index],quantity:arr[index].quantity-1};
                state.cart = arr;
            }
        }
    },
})
export const {addtowishlist,removefromwishlist,addtocart,removefromcart,increasequanity,decreasequantity} = CartSlice.actions;
export default CartSlice.reducer;