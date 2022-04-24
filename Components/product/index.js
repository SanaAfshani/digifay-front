import React from 'react';
import Details from './details';
import CarouselProduct from './carouselProduct'
import Sellers from './sellers';
import RecommendedProducts from './recommendedProducts';
import Comment from './comment';
const SingleProduct = ({data, isMobile}) => {
    return (
        <>
            <div className={`row m-0 dividerLine`}>
                <div className='col-12 col-lg-6'>
                    <CarouselProduct data={data} isMobile={isMobile}/>
                </div>
                <div className='col-12 col-lg-6'>
                    <Details data={data} isMobile={isMobile} />
                </div>
            </div>
            <div className='dividerLine'>
                  <Sellers data={data} isMobile={isMobile}/>
            </div>
            <div className='dividerLine'>
                <RecommendedProducts data={data} isMobile={isMobile}/>
            </div>
            <div>
                <Comment data={data} isMobile={isMobile}/>
            </div>

        </>
    );
};

export default SingleProduct;