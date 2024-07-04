import React, { useEffect, useRef, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProdCard from '../components/homePage/ProdCard';
import'./styles/homePage.css';
import FilterPrice from '../components/homePage/FilterPrice';
import FilterSelect from '../components/homePage/FilterSelect';
const body = document.querySelector('body');

const HomePage = () => { 

  const [inputValue, setInputValue] = useState('');
  const[inputPrice,setInputPrice] = useState({
    min:0,
    max:'infinity',
  });

const [categoryValue,setCategoryValue] = useState(''); 
const [menu,setMenu] = useState(false);

const products = useSelector((store) => store.products);
 
const dispatch = useDispatch();

 console.log(products);

useEffect(() => {
  dispatch(getProductsThunk());
},[]);

const textInput = useRef();

const handleChange = () => {
   setInputValue(textInput.current.value.trim().toLowerCase());
}

const cbFilter = (prod) => {
  //return prod.title.toLowerCase().includes(inputValue);
  const name =  prod.title.toLowerCase().includes(inputValue);
  const price = +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;
  const category = categoryValue===''? true : prod.categoryId=== +categoryValue
 return name && price && category;
}

const handleMenu = () => {
setMenu(!menu);
}

const handleMode= () => {
body.classList.toggle('dark');
}

  return (
    <div className='homepage'>
     <div className={`homepage_filters ${menu && 'active'}`}>
      <button onClick={handleMenu}>❌</button>
       <FilterPrice
           setInputPrice = {setInputPrice}
       />
       <FilterSelect
       setCategoryValue = {setCategoryValue}
       />
       <button onClick={handleMode}>Change mode</button>
     </div>
     <div className='homepage_search'>
        <input ref={textInput} onChange={handleChange} type="text" />
       <button>🔍</button>
       </div>
       <button className = {menu && 'active'} onClick={handleMenu}>Menu</button>
     <div className='homepage_container'>
        {
           products?.filter(cbFilter).map((prod) => (
            <ProdCard
              key={prod.id}
              prod={prod}
            />
           ))    
        }
        </div>
    </div>
  )
}

export default HomePage;
