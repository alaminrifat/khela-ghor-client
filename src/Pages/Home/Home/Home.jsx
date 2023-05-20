
import ProductGallery from "../Gallery/ProductGallery";
import Howitwork from "../Howitwork/Howitwork";
import Sales from "../Sales/Sales";
import Slider from "../Slider/Slider";
import TabComponent from "../TabComponent/TabComponent";



const Home = () => {
    return (
        <div>
            <Slider/>
            <Howitwork/>
            <Sales/>
            <ProductGallery/>
            <TabComponent/>
        </div>
    );
};

export default Home;