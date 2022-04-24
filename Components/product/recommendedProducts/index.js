import { faAngleLeft, faAngleRight, faAnglesLeft, faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './recommendedProducts.module.scss'
const RecommendedProducts = ({data}) => {

    

    const slideNext = (direction) => {
        var container = document.getElementById("container1");
        let scrollCompleted = 0;
        var slideVar = setInterval(() => {
          if (direction == "left") {
            container.scrollLeft -= 100;
          } else {
            container.scrollLeft += 100;
          }
          scrollCompleted += 10;
          if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
          }
        }, 50);
      };
      const slidePerv = (direction) => {
        var container = document.getElementById("container1");
        let scrollCompleted = 0;
        var slideVar = setInterval(() => {
          if (direction == "right") {
            container.scrollLeft += 100;
          } else {
            container.scrollLeft -= 100;
          }
          scrollCompleted += 10;
          if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
          }
        }, 50);
      };
    return (
        <>
            <div className={`${style.positions}`} >
                <p className={`${style.recommendedProductsTitle}`}>محصولات پیشنهادی</p>
                <div className={`d-flex ${style.recommendedProducts_overFlow} px-1 py-2`} id="container1">
                    {data.RecommendedProducts && data.RecommendedProducts.map((product,index)=>(
                        <div key={index} className={`${style.recommendedProducts_box}`}>
                            <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                            <div className='dividerLine p-0 mx-4'></div>
                            <div className='mx-4 mt-3'>
                                <p className={`${style.titleProducts} m-0`}>
                                    {product.name + " کد " + product.code}

                                    </p>
                                <div className='d-flex justify-content-between mt-3'>
                                    {product.off ?
                                       <React.Fragment>
                                           <p className={`${style.currentPrice}`}>{product.currentPrice} تومان</p>
                                           <p className={`${style.price}`}>{product.price}</p>
                                       </React.Fragment>
                                        :
                                        <p className={`${style.currentPrice}`}>{product.price} تومان</p>
                                    }

                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                    <button onClick={slidePerv}  className={`${style.recommendedProducts_buttonNext} d-flex align-items-center justify-content-center btn`} >

                    <FontAwesomeIcon icon={faAngleLeft} className='fa-1x'/> 
                    </button>
                    <button onClick={slideNext}  className={`${style.recommendedProducts_buttonPrev} d-flex align-items-center justify-content-center btn`} >

                    <FontAwesomeIcon icon={faAngleRight} className='fa-1x'/> 
                    </button>
            </div>
        </>
    );
};

export default RecommendedProducts;