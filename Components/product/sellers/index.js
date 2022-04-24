import {faShield, faStar, faStore} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonProduct from '../../button';
import style from './sellers.module.scss'

const Sellers = ({data , isMobile}) => {
    return (
        <>
            <div>
                {data.Providers && <p className={`${style.titleSellers}`}>فروشندگان این محصول</p>}
                {data.Providers && data.Providers.map((provider,index)=>(
                    <div key={index} className={`${style.rectangleSellers} mb-4 d-flex mx-auto align-content-center  `}>
                        <div className={`row align-content-center mx-2 ${isMobile ? 'w-50' : 'w-40'}`}>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faStore} className='ms-3'/>
                                <p className={`${style.storeTitle} m-0`}>{provider.name}</p>
                            </div>
                            <div className='d-flex align-items-center mt-2'>
                                <FontAwesomeIcon icon={faShield} className='ms-3'/>
                                <p className={`${style.warrantyTitle} m-0`}>
                                    {provider.warranty ? `${provider.warranty} ماه ضمانت کالا ` : "ضمانت ندارد"}

                                    </p>
                            </div>
                        </div>


                        <div className={`d-flex align-items-center ${isMobile ? 'w-40': 'w-25'}`}>
                            <p className={`m-0 ${style.priceText}`}>{provider.price}</p>
                            <p className={`m-0 ${style.warrantyTitle}`}>تومان</p>
                        </div>

                        <div className={`d-flex align-items-center ${isMobile ? '' : 'w-25'} `}>
                            <p className={`m-0 ${style.starTitle}`}>{provider.rate}</p>
                            <FontAwesomeIcon icon={faStar} className={`${style.starIcon}`}/>
                        </div>
                        {isMobile ? (
                            <>
                            </>
                        ) : 
                        <div className='d-flex align-items-center ms-3'>
                            <ButtonProduct content={'همین حالا بخرید'} color={'gray'}/>
                        </div>
                        
                        }

                    </div>

                ))}
            </div>
        </>
    );
};

export default Sellers;