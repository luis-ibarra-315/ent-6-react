import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import'./styles/prodSlider.css';
const ProdSlider = ({product}) => {
  return (
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
      aria-label="My Favorite Images"
    >
      {
        product?.images.map(image =>(
          <SplideSlide key={image.id}>
            <img width={250} src={image.url} alt = {`image.id`}/>
            </SplideSlide>
        ))

      }
    </Splide>
  )
}

export default ProdSlider;