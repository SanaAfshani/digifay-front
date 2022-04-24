import React from 'react';
import Details from './details';
import CarouselProduct from './carouselProduct'
import Sellers from './sellers';
import RecommendedProducts from './recommendedProducts';
import Comment from './comment';
const SingleProduct = ({data}) => {
    return (
        <>
            <div className={`row m-0 dividerLine`}>
                <div className='col-12 col-lg-6'>
                    <CarouselProduct  data={data}/>
                </div>
                <div className='col-12 col-lg-6'>
                    <Details data={data} />
                </div>
            </div>
            <div className='dividerLine'>
                  <Sellers data={data}/>
            </div>
            <div className='dividerLine'>
                <RecommendedProducts data={data}/>
            </div>
            <div className="mb-5">
                <Comment data={data}/>
            </div>

        </>
    );
};

export default SingleProduct;