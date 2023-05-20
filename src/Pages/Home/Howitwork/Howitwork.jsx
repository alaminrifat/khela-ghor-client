import inspire from "../../../assets/work/inspire.webp";
import encourage from "../../../assets/work/encouraging.webp";
import creative from "../../../assets/work/creative.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Howitwork = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        AOS.refresh();
    }, []);
    return (
        // <div data-aos="fade-up"></div>
        <div className="my-36">
            <p className=" text-4xl md:text-6xl font-bold text-center my-16  ">
                Here how it works
            </p>
            <div className="flex items-center justify-evenly">
                <div
                    className="flex flex-col items-center justify-between "
                    data-aos="slide-left"
                >
                    <img src={inspire} alt="" />
                    <h1 className="text-xl md:text-3xl font-bold mt-2">
                        Inspiring
                    </h1>
                    <p className="text-lg text-center md:text-xl mt-2 ">
                        Khela Ghor inspiring children to think outside the box.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-between "
                    data-aos="slide-up"
                >
                    <img src={encourage} alt="" />
                    <h1 className="text-xl md:text-3xl font-bold mt-2">
                        Encouraging
                    </h1>
                    <p className="text-lg text-center md:text-xl mt-2 ">
                        Khela Ghor encourages children to embrace curiosity.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-between "
                    data-aos="slide-right"
                >
                    <img src={creative} alt="" />
                    <h1 className="text-xl md:text-3xl font-bold mt-2">
                        Creative
                    </h1>
                    <p className="text-lg text-center md:text-xl mt-2 ">
                        Khela Ghor sparks creativity by offering a diverse.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Howitwork;
