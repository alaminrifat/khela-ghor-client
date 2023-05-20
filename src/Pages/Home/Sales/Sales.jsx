import CountDown from "../Countdown/CountDown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Sales = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 border-0">
            <div className="flex flex-col items-center justify-center">
                <h1
                    className="text-white text-4xl md:text-6xl font-bold mt-24  "
                    data-aos="fade-right"
                >
                    EID FLASH SALE
                </h1>
                <p
                    className="text-white text-2xl font-semibold mt-2"
                    data-aos="fade-left"
                >
                    15% Discount on all products
                </p>

                <CountDown />
                <button className="btn btn-warning text-white mb-16" >Purchase</button>
            </div>
        </div>
    );
};

export default Sales;
