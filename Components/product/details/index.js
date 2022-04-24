import React from 'react';
import ButtonProduct from '../../button';
import style from './details.module.scss'
import {useSelector} from "react-redux";

const Details = ({data}) => {
    const state = useSelector(state => state.toolsReducer)

    const specificationsDetails = () => {
        return (
            <ul className={`${style.listStyleSpec} me-2`}>
                <li>
                    <span className={`${style.titleSpec}`}> کفی :</span>
                    <span className={`${style.detailsTitleSpec}`}> قابل تعویض،قابلیت ارتجاعی</span>
                </li>

                <li>
                    <span className={`${style.titleSpec}`}>نحوه بسته شدن کفش : </span>
                    <span className={`${style.detailsTitleSpec}`}>بندی</span>
                </li>

                <li>
                    <span className={`${style.titleSpec}`}>   ویژگی های زیره: </span>
                    <span className={`${style.detailsTitleSpec}`}>قابلیت ارتجاعی،کاهش فشار وارده</span>
                </li>
            </ul>
        )
    }

    const buttonChooseAble = (content, Fontcolor = 'black', backgroundColor = 'white') => {
        return (
            <button
                className={`${style.buttonSize}  d-flex justify-content-center btn`}
                style={{backgroundColor: backgroundColor, color: Fontcolor}}

            >{content}</button>

        )
    }
    return (
        <>
            <div className={`${style.detailsContainer} row mx-0 align-items-center me-5`}>
                <h4 className="p-0" id={"abolfazl"}>{data.name}</h4>
                <div className='d-flex align-items-center justify-content-between mt-2 p-0'>
                    <div className='d-flex align-items-center'>
                        <span className={`${style.currentPrice}`}>{data.off ? data.currentPrice : data.price}</span>
                        <span>تومان</span>
                    </div>
                    {data.off &&
                    <div className='d-flex align-items-center'>
                        <span className={`${style.textDecorationsLine}`}>{data.price}</span>
                        <div className={`${style.square}`}>{data.off}</div>
                    </div>
                    }

                </div>

                <div className={`d-flex align-items-center justify-content-between mt-5 p-0 ${style.gapBetweenButton}`}>
                    <ButtonProduct content={'همین حالا بخرید'} color={'gray'}/>
                    <ButtonProduct content={'افزودن به سبد خرید'} color={'light'}/>
                </div>

                <span className={`${style.dividerLine}`}></span>

                <p className={`${style.specifications} p-0`}>مشخصات</p>

                {specificationsDetails()}
                <span className={`${style.dividerLine}`}></span>

                <p className={`${style.specifications} p-0`}>انتخاب سایز</p>

                <div className="d-flex align-items-center gap-3 p-0">
                    {data.sizes && data.sizes.map((size, index) => {
                        return (
                            buttonChooseAble(size, '#111111', '#fff')
                        )
                    })}
                </div>

                <span className={`${style.dividerLine} p-0`}></span>
                <p className={`${style.specifications} p-0`}>انتخاب رنگ</p>
                <div className="d-flex align-items-center gap-3 p-0">
                    {data.colors && data.colors.map((color, index) => {
                        return (
                            buttonChooseAble(null, null, color))
                    })}
                </div>


            </div>
        </>
    );
};

export default Details;