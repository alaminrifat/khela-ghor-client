import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductGallery = () => {
   useEffect(() => {
      AOS.init({
          duration: 400,
      });
      AOS.refresh();
  }, []);
    return (
        <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mt-20 mb-6" data-aos="fade-down">Rated Products</h1>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
                <div className="-m-1 flex flex-wrap md:-m-2 bg-slate-200">
                    <div className="flex w-1/2 flex-wrap ">
                        <div className="w-1/2 p-1 md:p-4 "  data-aos="fade-right">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/YLk40jF/puzzle-board.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-4 "  data-aos="fade-down">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/qR319BZ/chess.jpg"
                            />
                        </div>
                        <div className="w-full p-1 md:p-6 4  " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/xzNWq7h/robot-car-kit.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap" data-aos="fade-left">
                        <div className="w-full p-1 md:p-6 4  ">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/dmvXjTr/chemestry-kit.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-4   " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/YNwYkK5/geometry-board.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-4   " data-aos="fade-left">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 "
                                src="https://i.ibb.co/jG9zbNR/magnetic-tablet.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
