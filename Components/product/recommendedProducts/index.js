import { faAngleLeft, faAngleRight, faAnglesLeft, faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './recommendedProducts.module.scss'
const RecommendedProducts = () => {

    

    const slideNext = (direction) => {
        var container = document.getElementById("container");
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
        var container = document.getElementById("container");
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
                <div className={`d-flex ${style.recommendedProducts_overFlow}`} id="container">
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.recommendedProducts_box}`}>
                        <div className={`${style.recommendedProducts_box__img}`}><img src='/images/1.jpg' /></div>
                        <div className='dividerLine p-0 mx-4'></div>
                        <div className='mx-4 mt-3'>
                            <p className={`${style.titleProducts} m-0`}>کفش اسپرت مردانه کد 1170</p>
                            <div className='d-flex justify-content-between mt-3'>
                                <p className={`${style.currentPrice}`}>1،120،000 تومان</p>
                                <p className={`${style.price}`}>1،260،000</p>

                            </div>
                        </div>
                    </div>
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