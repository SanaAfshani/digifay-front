import React from 'react';
import style from './button.module.scss'
const ButtonProduct = ({content, color='gray'}) => {
    return (
            <button className={`${style.buttonProduct} bg-${color}  btn`}>{content}</button>
       
    );
};

export default ButtonProduct;