import React from 'react';
import ButtonProduct from '../../button';
import style from './details.module.scss'
const Details = () => {
    return (
        <>
            <div className={`${style.detailsContainer} row mx-0 align-items-center`}>
                <h4>کفش اسپرت مردانه کد 1156</h4>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                    <div className='d-flex align-items-center'>
                    <span className={`${style.currentPrice}`}>849000</span>
                    <span>تومان</span>
                    </div>
                    <div className='d-flex align-items-center'>
                    <span className={`${style.textDecorationsLine}`}>1260000</span>
                    <div className={`${style.square}`}>20%</div>
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <ButtonProduct content={'همین حالا بخرید'} color={'gray'} />

                </div>
            </div>
        </>
    );
};

export default Details;