import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postProductsThunk } from '../../store/slices/cart.slice';
import'./styles/prodDetail.css';
const ProdDetail = ({product}) => {

const [count, setCount] = useState(1);


const dispatch = useDispatch();

const handleless = () => {
if (count > 1) {
  setCount (count-1);
}
}

const handlePlus = () => {
 setCount(count +1)
}

const handleAddCart = () => {
 dispatch(postProductsThunk({
  'quantity':count,
  'productId': product.id,
 }));
}

  return (
    <div className='proddetail'>
     <span className='proddetail_brand'>{product?.brand}</span>
     <h3 className='proddetail_title'>{product?.title}</h3>
     <p>{product?.description}</p>
     <div className='proddetail_container'>
     <ul className='proddetail_list'>
      <li className='proddetail_item'>price</li>
      <li className='proddetail_item'>$ {product?.price}</li>
     </ul>
     <div className='proddetail_buttons'>
      <span className='quantity'>Quantity</span>
      <button className='proddetail_less' onClick={handleless}>-</button>
      <span className='proddetail_count'>{count}</span>
      <button  className= 'proddetail_plus'onClick={handlePlus}>+</button>
     </div>
     </div>
     <button className='proddtail_btn' onClick={handleAddCart}>Add to cart</button>
    </div>
  )
}

export default ProdDetail;
