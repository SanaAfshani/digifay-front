import React from 'react';
import Details from './details';
import CarouselProduct from './carouselProduct'
import Sellers from './sellers';
import RecommendedProducts from './recommendedProducts';
const SingleProduct = () => {
    return (
        <>
            <div className={`row dividerLine`}>
                <div className='col-12 col-lg-6'>
                    <CarouselProduct/>
                </div>
                <div className='col-12 col-lg-6'>
                    <Details />
                </div>
            </div>
            <div className='dividerLine'>
                  <Sellers/>  
            </div>
            <div>
                <RecommendedProducts />
            </div>

        </>
    );
};

export default SingleProduct;