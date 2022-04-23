import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './comment.module.scss'
const Comment = () => {

        

    const slideNext = (direction) => {
        var container = document.getElementById("container");
        let scrollCompleted = 0;
        var slideVar = setInterval(() => {
          if (direction == "left") {
            container.scrollLeft -= 100;
          } else {
            container.scrollLeft += 100;
          }
          scrollCompleted += 10;
          if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
          }
        }, 50);
      };
      const slidePerv = (direction) => {
        var container = document.getElementById("container");
        let scrollCompleted = 0;
        var slideVar = setInterval(() => {
          if (direction == "right") {
            container.scrollLeft += 100;
          } else {
            container.scrollLeft -= 100;
          }
          scrollCompleted += 10;
          if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
          }
        }, 50);
      };
    return (
        <>
            <div className={`${style.positionsComment}`}>
            <p className={`${style.commentProductTitle}`}>نظرات کاربران</p>
                <div className={`d-flex ${style.commentProduct_overFlow}`} id="container">
                    <div className={`${style.commentProduct_box}`}>
                            <p className={`${style.commentProduct_box__comment} `}>ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.</p>
                            <div className='mx-4 mt-3'>
                                <div className='d-flex justify-content-between mt-3'>
                                    <p className={`${style.currentDate}`}>14 اسفند 1400</p>
                                    <FontAwesomeIcon icon={faThumbsUp} className={`fa-2x ${style.thumbsIcon}`}/> 

                                </div>
                            </div>
                        </div>



                </div>
                <button onClick={slidePerv}  className={`${style.commentProduct_buttonNext} d-flex align-items-center justify-content-center btn`} >

                    <FontAwesomeIcon icon={faAngleLeft} className='fa-1x'/> 
                    </button>
                    <button onClick={slideNext}  className={`${style.commentProduct_buttonPrev} d-flex align-items-center justify-content-center btn`} >

                    <FontAwesomeIcon icon={faAngleRight} className='fa-1x'/> 
                    </button>

            </div> 
        </>
    );
};

export default Comment;