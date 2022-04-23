import { faShield, faStar, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonProduct from '../../button';
import style from './sellers.module.scss'
const Sellers = () => {
    return (
        <>
            <div className='mx-3 ' style={{height: 500}}>
                <p className={`${style.titleSellers}`}>فروشندگان این محصول</p>

                <div className={`${style.rectangleSellers} d-flex mx-auto align-content-center  `}>
                    <div className='row align-content-center mx-2 w-40'>
                    <div className='d-flex align-items-center'>
                        <FontAwesomeIcon icon={faStore}  className='ms-3'/> 
                        <p className={`${style.storeTitle} m-0`}>کفش شیک</p>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <FontAwesomeIcon icon={faShield} className='ms-3'/> 
                        <p className={`${style.warrantyTitle} m-0`}>6 ماه ضمانت کالا</p>
                    </div>
                    </div>


                    <div className='d-flex align-items-center w-25'>
                        <p className={`m-0 ${style.priceText}`}>849،000</p>
                        <p className={`m-0 ${style.warrantyTitle}`}>تومان</p>
                    </div>
                    
                    <div className='d-flex align-items-center w-25'>
                        <p className={`m-0 ${style.warrantyTitle} ms-2`}>4.3</p>
                        <FontAwesomeIcon icon={faStar} className={`${style.starIcon}`}/> 
                    </div>

                    <div className='d-flex align-items-center ms-3'>
                        <ButtonProduct content={'همین حالا بخرید'} color={'gray'}  />
                    </div>

                </div>



            </div>
        </>
    );
};

export default Sellers;