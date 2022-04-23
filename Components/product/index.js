import React from 'react';
import Details from './details';
import CarouselProduct from './carouselProduct'
const SingleProduct = () => {
    return (
        <>
            <div className='d-flex col-12'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <CarouselProduct/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Details />
                </div>
            </div>
        </>
    );
};

export default SingleProduct;