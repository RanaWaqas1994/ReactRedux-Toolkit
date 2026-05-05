// Intial value le gain pehle or phr createSlice banayen ge uske andar e reducers atye han
//reducer ke andar e fucntion rehte han jese addItem(action ha) abh iske andar jo parameter ha wo state
// rehta ha (yeah state kya ha) is function ke andar value pass karain ge. yeah wase hamara 
// 1 function ha abh uske andar 1 increment karain ge
//Yeah sab karne ke bad is Action ko export karna ha addItem ko like below or iske bad
// reducer bhi mile ga iske andar abh data store ha 
// jo reducer ko petch karna parhe ga "Store.js" ke sath

import { createSlice } from '@reduxjs/toolkit'
const initialState= {
    value: 0 
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1;
        },
                removeItem:(state)=>{
           state.value > 0 ? state.value-=1:null
        },
                clearAllItem:(state)=>{
            state.value=0;
        }
    }

})

export const {addItem,removeItem,clearAllItem} = cart.actions;
export default cart.reducer