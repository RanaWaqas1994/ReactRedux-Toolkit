// Intial value le gain pehle or phr createSlice banayen ge uske andar e reducers atye han
//reducer ke andar e fucntion rehte han jese addItem(action ha) abh iske andar jo parameter ha wo state
// rehta ha (yeah state kya ha) is function ke andar value pass karain ge. yeah wase hamara 
// 1 function ha abh uske andar 1 increment karain ge
//Yeah sab karne ke bad is Action ko export karna ha addItem ko like below or iske bad
// reducer bhi mile ga iske andar abh data store ha 
// jo reducer ko petch karna parhe ga "Store.js" ke sath

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // value: 0 
    // items: []
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // state.value+=1;
            //yaha pe abh sara product ka data arha ha action.payload me or yeah state ke andar store
            //bhi ho rahi ha state.items.push ke andar
            //abh cartwali file me jake cart ke andar sari state nikalain ge product ki

            console.log(action.payload);
            state.items.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))

        },
        removeItem: (state, action) => {
            //    state.value > 0 ? state.value-=1:null
            const cartData = state.items.filter(item => item.id != action.payload.id);
            state.items = cartData;
            localStorage.setItem('cart',JSON.stringify(cartData))
        },
        clearAllItem: (state) => {
            state.items = [];
        }
    }

})

export const { addItem, removeItem, clearAllItem } = cart.actions;
export default cart.reducer