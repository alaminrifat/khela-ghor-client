import CountDown from "../Countdown/CountDown";
import ProductGallery from "../Gallery/ProductGallery";
import Howitwork from "../Howitwork/Howitwork";
import Sales from "../Sales/Sales";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div>
            <Slider/>
            <Howitwork/>
            <Sales/>
            <ProductGallery/>
            {/* <CountDown/> */}
        </div>
    );
};

export default Home;