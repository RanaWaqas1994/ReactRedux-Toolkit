import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//yeah Async function bana liya jisme API Call ho gai.
export const fetchProducts = createAsyncThunk('product',async ()=>{
    const resp = await fetch('https://dummyjson.com/products');
    const jsonResp = await resp.json();
    return jsonResp.products
})
// End
const initialState ={
    items: [],
    status: undefined,
    error: null
}
// Abh New Slice banayen ge

const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    //Abh initial values pass karni parhe ge (intialState)
    initialState,
    //"ExtraReducer" yeah kabh kam ata ha jab hum async operation call kar rahe hn
    //  Ya is OP "createAsyncThunk" ko direct call kar rahe hote ho apke UI parcel ke component se. 
    extraReducers:(builder)=> {
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded',
            state.items = action.payload
        })  //abh iske sath case add karne parhain ge bcz jo API se response aye ga 
        //3 state hotye han Promises ke Pending,Fullfill,Rejected
        //agr yeah fullfilled hota ha tw iske andar 2nd call back function hota ha State,action 
    }  

})

export default ProductsSlice.reducer