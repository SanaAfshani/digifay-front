import { faMoon, faSearch, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './header.module.scss'
const Header = ({isMobile}) => {

    const menu = ()=>{
        return(
            <ul className={`${style.ulList}  d-none d-lg-flex `}>
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
                <button className='btn d-flex p-0'>
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </>
        )
    }

    if(isMobile){
        <>
            
        </>
    }else

    return (
        <>
        <div className={`container-xxl ${style.headerContainer}`}>
            <button className={`btn d-flex p-0`}>
                <FontAwesomeIcon icon={faMoon} className={`${style.moonIcon}`} />
            </button>
            {menu()}
            {searchBox()}
        </div> 
        </>
    );
};

export default Header;