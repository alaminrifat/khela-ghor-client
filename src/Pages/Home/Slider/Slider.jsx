// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
    return (
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <figure className="relative">
                        <img src="https://i.ibb.co/f1Vpc3Y/1.webp" alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col  justify-center me-4 md:me-20 text-black ">
                            <p className="text-base md:text-6xl font-bold text-red-600 mx-4 text-end ">Inspiring children to</p>
                            <p className="text-base md:text-6xl font-bold text-red-600 mx-4 text-end mt-0 md:mt-8">think outside the box.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="relative">
                        <img src="https://i.ibb.co/zGty84r/2.webp" alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col  justify-center me-4 md:me-20 text-black ">
                        <p className="text-base md:text-6xl font-bold text-red-600 mx-4 text-end ">Encourages children to</p>
                        <p className="text-base md:text-6xl font-bold text-red-600 mx-4 text-end mt-0 md:mt-8"> embrace curiosity.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="relative">
                        <img src="https://i.ibb.co/9T6vGMm/3.webp" alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col  justify-center me-4 md:me-20 text-black ">
                        <p className="text-base md:text-6xl font-bold text-red-600 mx-4 text-end ">Sparks creativity by</p>
                        <p className="text-base md:text-6xl font-bold text-red-600 mx-4 text-end mt-0 md:mt-8">offering a diverse.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
    );
};

export default Slider;
