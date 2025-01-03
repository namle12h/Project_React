import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AdvancedSwiperExample() {
  return (
    <div className="p-6 bg-gray-900 w-[550px]">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Advanced Swiper Example
      </h2>
      <Swiper
        spaceBetween={30} // Khoảng cách giữa các slide
        slidesPerView={3} // Hiển thị 3 slide cùng lúc
        navigation={true} // Bật nút Previous/Next
        pagination={{ clickable: true }} // Hiển thị và cho phép bấm vào pagination
        autoplay={{ delay: 3000 }} // Tự động chuyển slide sau 3 giây
        modules={[Navigation, Pagination, Autoplay]} // Import các module
        className="mySwiper"
      >
        {/* Các Slide */}
        <SwiperSlide>
          <div className="bg-blue-500 text-white p-6 rounded-lg">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 text-white p-6 rounded-lg">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 text-white p-6 rounded-lg">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-500 text-white p-6 rounded-lg">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 text-white p-6 rounded-lg">Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 text-white p-6 rounded-lg">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 text-white p-6 rounded-lg">Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 text-white p-6 rounded-lg">Slide 8</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 text-white p-6 rounded-lg">Slide 9</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 text-white p-6 rounded-lg">
            Slide 10
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
