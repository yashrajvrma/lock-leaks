import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/testimonial.css';

const testimonials = [
  {
    name: "Lorem Ipsum One",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/person.png",
  },
  {
    name: "Lorem Ipsum Two",
    role: "CEO",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png",
  },
  {
    name: "Lorem Ipsum Three",
    role: "CEO",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/person.png",
  },
  {
    name: "Lorem Ipsum Four",
    role: "CEO",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/person.png",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonialSection">
      {/* Heading Section */}
      <div className="testimonialHeading">
        <h5>Testimonials</h5>
        <h2>Trusted by Creators</h2>
        <p>Real Stories, Real Protection</p>
      </div>

      {/* Customer Count Section */}
      <div className="customerCountSection">
        <div className="customerCount">
          <Image 
            src="/images/people-icon.png" 
            alt="Happy customers" 
            width={315} 
            height={52} 
          />
        </div>
      </div>

      {/* Swiper Testimonial Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={-40}
        loop={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonialCard">
              <p className="testimonialText">"{testimonial.text}"</p>
              <div className="testimonialAuthor">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="authorImage"
                />
                <div className="authorInfo">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>

              {/* Bottom Right SVG Icon */}
              <div className="testimonialIcon">
              <Image
                src="/icons/top-right-arrow.svg"
                alt="Arrow Icon"
                width={24}
                height={24}
              />
            </div>

            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
