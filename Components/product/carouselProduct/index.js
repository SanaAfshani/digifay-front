import React, {useState} from 'react';

const CarouselProduct = () => {
    const Images = ["/Images/1.jpg", "/Images/2.jpg", "/Images/3.jpg"];
    const [CurrentImage, setCurrentImage] = useState(0)
    return (
        <div className="Carousel_Container d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-3 Carousel_list">
                <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center gap-4 pointer">
                    {Images && Images.map((item, index) => (
                        <div className="itemList" key={index} onClick={() => setCurrentImage(index)}>
                            <img className="w-100" src={item} alt=""/>
                        </div>
                    ))}
                    <div className="itemList" >
                        <img className="w-100" src={Images[CurrentImage]}/>
                    </div>

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
                <img className="w-100 h-100" src={Images[CurrentImage]}/>
            </div>
        </div>
    );
};

export default CarouselProduct;