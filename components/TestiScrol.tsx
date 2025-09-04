import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import '../styles/TestiScrol.css';

const testimonials = [
  {
    question: "How's Lock Leaks working for you?",
    sender: "Lock Leaks",
    responses: [
      {
        name: "Dando",
        label: "Dando",
        messages: [
          "Really well! Saves us tons of time.",
          "Lock Leaks has saved us so much time with automated takedowns. The real-time alerts are extremely helpful, and our creators feel secure.",
        ],
        avatar: "icons/dando.svg",
        designation: "CEO of ******",
      },
    ],
  },
  {
    question: "How's the service been so far?",
    sender: "Lock Leaks",
    responses: [
      {
        name: "Rodeo",
        label: "Rodeo",
        messages: [
          "Happy to! The new updates have made a huge difference.",
          "The auto-scan feature is fantastic. It allows us to focus on growing our business while the system handles leaks automatically.",
        ],
        avatar: "icons/Rodeo.svg",
        designation: "CEO of ******",
      },
      {
        name: "Rodeo",
        label: "Rodeo",
        messages: [
          "Happy to! The new updates have made a huge difference.",
          "The auto-scan feature is fantastic. It allows us to focus on growing our business while the system handles leaks automatically.",
        ],
        avatar: "icons/Rodeo.svg",
        designation: "CEO of ******",
      },
    ],
  },
];

export default function TestiScrol() {
  return (
    <section className="scroll-section">
      {/* Heading Section */}
      <div className="testimonials-heading">
        <p className="small-text">Testimonials</p>
        <h2 className="main-title">Trusted by Agencies</h2>
        <h4 className="sub-title">Real Experiences, Proven Results.</h4>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
        className="mySwiper"
      >
        {testimonials.map((testi, index) =>
          testi.responses.map((resp, i) => (
            <SwiperSlide key={`${index}-${i}`}>
              <div className="chat-wrapper">
                <div className="from-lockleaks">
                  <div className="sender-label">{testi.sender}</div>
                  <div className="message-box">{testi.question}</div>
                </div>

                <div className="from-dando mt-3">
                  <div className="sender-label">{resp.label}</div>
                  {resp.messages.map((msg, idx) => (
                    <div className="message-box" key={idx}>
                      {msg}
                    </div>
                  ))}
                </div>

                <div className="profile-bar">
                  <Image
                    src={resp.avatar}
                    alt="Avatar"
                    width={38}
                    height={38}
                    unoptimized
                  />
                  <p className="name">{resp.name}</p>
                  <p className="designation">{resp.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
}
