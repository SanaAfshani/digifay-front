import { faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './header.module.scss'
const Header = () => {

    const menu = ()=>{
        return(
            <ul className={`${style.ulList}  d-flex`}>
                <li >صفحه اصلی</li>
                <li >محصولات</li>
                <li >خدمات</li>
                <li >وبلاگ</li>
                <li >درباره ما</li>
            </ul>
        )
    }

    const searchBox = () => {
        return(
            <>
                <button className='btn d-flex'>
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </>
        )
    }


    return (
        <>
        <div className={`d-flex justify-content-between align-items-center ${style.headerContainer}`}>
            <button className={`btn d-flex`}>
                <FontAwesomeIcon icon={faMoon} className={`${style.moonIcon}`} />
            </button>
            {menu()}
            {searchBox()}
        </div> 
        </>
    );
};

export default Header;