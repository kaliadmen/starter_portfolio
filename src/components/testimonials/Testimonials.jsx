import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import './testimonials.css';
import {data} from "../../reviews";

const Testimonials = () => {
  return (
      <section id="testimonials">
        <h5>What others have said</h5>
        <h2>Testimonials</h2>

        <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="container testimonials__container">
        {
          data.map(({id, avatar, name, review}) => {
            return (
                  <SwiperSlide className="testimonial" key={id}>
                    <div className="client__avatar">
                      <img src={avatar} alt="client avatar"/>
                    </div>
                    <h5 className="client__name">
                      {name}
                    </h5>
                    <small className="client__review">
                      {review}
                    </small>
                  </SwiperSlide>
            )
          })
        }
        </Swiper>
      </section>
  );
};

export default Testimonials;
