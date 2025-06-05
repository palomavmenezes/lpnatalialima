import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimony {
  name: string;
  quote: string;
}

interface ContentTestimoniesProps {
  testimonies: Testimony[];
}

const ContentTestimonies: React.FC<ContentTestimoniesProps> = ({ testimonies }) => {

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={50}
      slidesPerView={2}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1, // para telas pequenas (mobile)
        },
        768: {
          slidesPerView: 2, // a partir de 768px, mostra 2
        },
      }}
    >
      {testimonies.map(({ name, quote }, index) => (
        <SwiperSlide key={index} className="mb-10">
          <div className="bg-light h-100 p-5 max-sm:m-5">
            <div className="depoimento">
              <p>{quote}</p>
              <p className="name text-right">- {name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentTestimonies;
