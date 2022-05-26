import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            // state.quantity += 1;
            // state.products.push(action.payload)
            // state.total += action.payload.price * action.payload.quantity;

            
            const newItem = action.payload;
            const existingItem = state.products.find((item) => item._id === newItem.id);

            state.total = (
                state.total * 1 +
                action.payload.price * action.payload.quantity
              ).toFixed(2);
              state.quantity += action.payload.quantity;
        
        
              if (!existingItem) {
                state.products.push(action.payload);
              } else {
                // If product is added then update product quantity
                existingItem.quantity += action.payload.quantity;
              }

        },
        removeProduct: (state, action) => {

        //    state.quantity = 0;
        //    state.total = 0;

        const existingItem = state.products.find(
            (item) => item._id === action.payload
          );

            state.products = [...state.products.filter((product) => product._id !== action.payload)];

            state.quantity -= existingItem.quantity;

            state.total = (
              state.total * 1 -
              existingItem.price * existingItem.quantity
            ).toFixed(2);
        },
    }
});

export const {addProduct} = cartSlice.actions;
export const {removeProduct} = cartSlice.actions;
export default cartSlice.reducer;