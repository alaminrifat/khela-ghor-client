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
                            <p className="text-base md:text-4xl mx-4 text-end">Beef  beef with spices and herbs.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="relative">
                        <img src="https://i.ibb.co/zGty84r/2.webp" alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col  justify-center me-4 md:me-20 text-black ">
                        <p className="text-base md:text-4xl mx-4 text-end">Chi making it a popular choice for an easy and delicious meal.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="relative">
                        <img src="https://i.ibb.co/9T6vGMm/3.webp" alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col  justify-center me-4 md:me-20 text-black ">
                        <p className="text-base md:text-4xl mx-4 text-end"> baked on a crumbly biscuit base and often served chilled.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
    );
};

export default Slider;
