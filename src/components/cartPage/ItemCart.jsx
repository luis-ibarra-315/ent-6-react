import React from 'react';
import './styles/itemCart.css';
import { deleteProductThunk, updateProductThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const ItemCart = ({prod}) => {

  const dispatch = useDispatch();

const handleDelete = () => {
    dispatch(deleteProductThunk(prod.id));
}

const handleless = () => {
          if(prod.quantity > 1){
            dispatch(updateProductThunk(prod.id,{
              'quantity': prod.quantity -1,
            }));
          }
  dispatch(updateProductThunk(prod.id,{
    'quantity': prod.quantity  - 1,
  }));
}

const handlePlus = () => {
  dispatch(updateProductThunk(prod.id,{
    'quantity': prod.quantity + 1,
  }));
}

  return (
   
   <article className='itemcart'>
    <h3 className='itemcart_title'>{prod.product?.title}</h3>
    <filter className='itemcart_img'>
      <img src= {prod.product?.images[0].url} alt='product image'/>
    </filter>
    <div className='itemcart_buttons'>
      <button onClick={handleless}>-</button>
      <span>{prod.quantity}</span>
      <button onClick={handlePlus}>+</button>
    </div>
    <button onClick={handleDelete} className='itemcart_btn'>delete</button>
    <p className='itemcart_total'>total: $ <span>{prod.product?.price * prod.quantity}</span></p>
   </article>
  )
}

export default ItemCart ;
