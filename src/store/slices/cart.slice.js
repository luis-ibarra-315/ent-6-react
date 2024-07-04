import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';

const cart = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        setCart:(_state,action) => action.payload,
        //addCart:(state,{payload}) => [...state,payload]
        addCart:(state,{payload}) => {state.push(payload)},
        delCart:(state,{payload}) => state.filter(
                         (Prod) => Prod.id!==payload
        ),
     updCart: (state,{payload}) => {
       const {id,quantity} = payload
       return state.map((Prod) => Prod.id ===id ? 
                       {...Prod,quantity}: Prod);

     },
    }
});

export const {setCart,addCart,delCart,updCart} = cart.actions;

export default cart.reducer;


export const getCartProdsThunk = () => (dispatch) => {
    const url = `${urlBase}/cart`;
    axios.get(url,bearerToken())
         .then(res => {
            dispatch(setCart(res.data)) 
            console.log(res.data);
        })
         .catch(err => console.log(err));
}

export const postProductsThunk = (data) => (dispatch) => {
   const url = `${urlBase}/cart`;
     axios.post(url,data,bearerToken())
          .then(res => {
            dispatch(addCart(res.data));
          console.log(res.data);
        })
          .catch(err => console.log(err));
}

export const deleteProductThunk = (id) => (dispatch) => {
  const url = `${urlBase}/cart${id}`;
  axios.delete(url,bearerToken())
       .then(() => { 
        dispatch(delCart(id));
        console.log('delete success');
      })
       .catch(err => console.log(err));

}

export const updateProductThunk = (id,data) => (dispatch) => 
  {
    const url = `${urlBase}/vart/${id}`;
    axios.put(url,data,bearerToken())
         .then(res => {
             dispatch(updCart(res.data));
           console.log(res.data);
         })
         .catch(err => console.log(err));
  }