import React from 'react';
import Details from './details';
import CarouselProduct from './carouselProduct'
import Sellers from './sellers';
const SingleProduct = () => {
    return (
        <>
            <div className={`d-flex col-12 dividerLine`}>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <CarouselProduct/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Details />
                </div>
            </div>
            <div>
                  <Sellers/>  
            </div>
        </>
    );
};

export default SingleProduct;