import React from 'react';
import ButtonProduct from '../../button';
import style from './details.module.scss'
const Details = () => {

    const specificationsDetails = () => {
        return(
            <ul className={`${style.listStyleSpec} me-3`}>
                <li >
                    <span className={`${style.titleSpec}`}> کفی :</span>
                    <span className={`${style.detailsTitleSpec}`}> قابل تعویض،قابلیت ارتجاعی</span>
                 </li>

                <li >
                    <span className={`${style.titleSpec}`}>نحوه بسته شدن کفش : </span>
                    <span className={`${style.detailsTitleSpec}`}>بندی</span>
                </li>

                <li >
                    <span className={`${style.titleSpec}`}>   ویژگی های زیره: </span>
                    <span className={`${style.detailsTitleSpec}`}>قابلیت ارتجاعی،کاهش فشار وارده</span>
                </li>
            </ul>
        )
    }

    const buttonChooseAble =(content,Fontcolor='black',backgroundColor='white')=>{
        return(
            <div>
                <button 
                    className={`${style.buttonSize}  d-flex justify-content-center me-2 btn`}
                    style={{backgroundColor : backgroundColor,color: Fontcolor}}
                
                >{content}</button>

            </div>
        )
    }
    return (
        <>
            <div className={`${style.detailsContainer} row mx-0 align-items-center me-5`}>
                <h4>کفش اسپرت مردانه کد 1156</h4>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                    <div className='d-flex align-items-center'>
                    <span className={`${style.currentPrice}`}>849،000</span>
                    <span>تومان</span>
                    </div>
                    <div className='d-flex align-items-center'>
                    <span className={`${style.textDecorationsLine}`}>1،260،000</span>
                    <div className={`${style.square}`}>20%</div>
                    </div>
                </div>

                <div className={`d-flex align-items-center mt-5 ${style.gapBetweenButton}`}>
                    <ButtonProduct content={'همین حالا بخرید'} color={'gray'}  />
                    <ButtonProduct content={'افزودن به سبد خرید'} color={'light'} />
                </div>

                <span className={`${style.dividerLine} me-2`}></span>

                <p className={`${style.specifications}`}>مشخصات</p>

                {specificationsDetails()}
                <span className={`${style.dividerLine} me-2`}></span>

                <p className={`${style.specifications}`}>انتخاب سایز</p>
                 
                {buttonChooseAble(38,'#111111','#fff')}
                 <span className={`${style.dividerLine} me-2`}></span>
                 <p className={`${style.specifications}`}>انتخاب رنگ</p>

                 {buttonChooseAble(null,null,'#6380E7')}

            </div>
        </>
    );
};

export default Details;