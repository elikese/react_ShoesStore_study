import { configureStore, createSlice } from "@reduxjs/toolkit";

let userName = createSlice({
    name : 'userName',
    initialState: 'kim'
})

let stock = createSlice({
    name: 'stock',
    initialState: [10,11,12]
})

let basket = createSlice({
    name: 'basket',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        plusCartCount(state, targetId){
            state.forEach(product => { 
                if(product.id===targetId.payload){
                    product.count++;
                }
        });
        },
        minusCartCount(state, targetId){
            state.forEach(product => { 
                if(product.id===targetId.payload && product.count > 0){
                    product.count--;
                }
        });
        },
    }
})

export let { plusCartCount, minusCartCount } = basket.actions;

export default configureStore({
    reducer: {
        userName : userName.reducer,
        stock : stock.reducer,
        basket : basket.reducer
    }
})