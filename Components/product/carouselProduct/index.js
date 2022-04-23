import React, {useEffect, useState} from 'react';
import UseWindowResize from "../../../Hooks/useWindowResize";

const CarouselProduct = () => {
    const Images = ["/Images/1.jpg", "/Images/2.jpg", "/Images/3.jpg", "/Images/2.jpg", "/Images/2.jpg",];
    const [ArrImg, setArrImg] = useState(Images)
    const [CurrentImage, setCurrentImage] = useState(0)
    const size = UseWindowResize()

    useEffect(() => {
        if (size > 992) {
            const P_Image_width = document.getElementById("ProductImage").clientWidth
            let itemCount = Math.floor(P_Image_width / 114)
            console.log(itemCount, "itemCount")
            let createImgArray;
            if (Images.length > itemCount) {
                createImgArray = Images.slice(0, itemCount - 1)
            } else if (Images.length <= itemCount) {
                createImgArray = Images.slice(0, itemCount)
            }
            setArrImg(createImgArray)
            // if (Images.length === itemCount) {
            //     setCountList(itemCount)
            // }  else if (Images.length < itemCount){
            //     setCountList(Images.length)
            // } else if (Images.length > itemCount) {
            //     setCountList(itemCount - 1)
            // }
        }else{
            setArrImg(Images)
        }
    }, [size])

    return (
        <div className="Carousel_Container d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-3 Carousel_list">
                <div className="d-flex flex-row flex-lg-column  gap-4 pointer">
                    {ArrImg && ArrImg.map((item, index) => (
                        <div className="itemList" key={index} onClick={() => setCurrentImage(index)}>
                            <img className="w-100" src={item} alt=""/>
                        </div>
                    ))}
                    {ArrImg.length < Images.length &&
                    <div className="itemList">
                        <img className="w-100" src={Images[CurrentImage]}/>
                    </div>
                    }


                </div>
            </div>
            <div className="col-12 col-lg-9 Carousel_Image" id="ProductImage">
                <div className="dots">
                    {Images && Images.map((item, index) => (
                        <div className={`itemDot ${CurrentImage === index ? "itemDot_active" : ""}`} key={index}
                             onClick={() => setCurrentImage(index)}>
                            <div className="dot"></div>
                        </div>
                    ))}
                </div>
                <div className="off">
                    %
                </div>
                <img className="w-100" src={Images[CurrentImage]}/>
            </div>
        </div>
    );
};

export default CarouselProduct;