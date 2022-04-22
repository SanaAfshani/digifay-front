import React from 'react';
import Details from './details';
import CarouselProduct from './carouselProduct'
const SingleProduct = () => {
    return (
        <>
            <div className='d-flex col-12'>
                <div className='col-6'>
                    <CarouselProduct/>
                </div>
                <div className='col-6'>
                    <Details />
                </div>
            </div>
        </>
    );
};

export default SingleProduct;