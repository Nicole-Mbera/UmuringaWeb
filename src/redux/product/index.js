import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice ({
name: "product",
initialState: {products: [], selectedProduct: {}, isFetching: false},
reducers:{
setProducts(state,action){
    state.products=action.payload?.data;
},
setSelectedProduct(state,action){
    state.selectedProduct=action.payload;
},
setIsFetching(state,action){
    state.isFetching=action.payload;
},
},
});
export const productActions=productSlice.actions;
export default productSlice.reducer;