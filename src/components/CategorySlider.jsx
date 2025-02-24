import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards,  EffectCoverflow, Navigation,Pagination,} from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
 
 




export default function CategorySlider({ title, data }) {
  let [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 1000 ? 1 : 3
  );
  let [slideType, setSlideType] = useState(
    window.innerWidth < 1000 ? "cards" : "coverflow"
  );
  let navigate = useNavigate();
  let options = {
    effect: slideType,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: slidesPerView,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: data.length > slidesPerView,
    navigation: true,
    pagination: false,
    modules: [EffectCoverflow, Pagination, EffectCards, Navigation],
    className: "mySwiper",
  };
  function handelWindoResize() {
    setSlidesPerView(window.innerWidth < 1000 ? 1 : 3);
    setSlideType(window.innerWidth < 1000 ? "cards" : "coverflow");
    navigate(0);
  }
  window.addEventListener("resize", handelWindoResize);

  let duplicateData = data.length < slidesPerView    ? [...data, ...data] : data;

 

  return (
    <div className="container-fluid py-5 mb-5 category-slider">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our {title}</h5>
          <h3>We Deal in the Following!</h3>
        </div>

      
        <Swiper {...options}> 
          {duplicateData?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <div className="card-img">
                <img
                  src={`${process.env.REACT_APP_BACKEND_SERVER}/${item.pic}`}
                  alt={item.name}
                  height={400}
                  width={430}
                />
                </div>
              
                <div className='slider-card-elements '>
                  <h4 className='text-primary'>{item.name}</h4>
                 <Link to={title === "Maincategory" ? `/shop?mc=${item.name}` : title === "Subcategory" ? `/shop?sc=${item.name}` : `/shop?br=${item.name}`} className='btn text-light border-3 border-light'>Shop Now</Link>
               </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
}
