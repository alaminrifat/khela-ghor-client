
import setTitle from "../../../hook/setTitle";
import CustomerReview from "../CustomerReview/CustomerReview";
import FindUs from "../FindUs/FindUs";
import ProductGallery from "../Gallery/ProductGallery";
import Howitwork from "../Howitwork/Howitwork";
import Sales from "../Sales/Sales";
import Slider from "../Slider/Slider";
import TabComponent from "../TabComponent/TabComponent";



const Home = () => {
    setTitle('Home');
    return (
        <div>
            <Slider/>
            <Howitwork/>
            <Sales/>
            <ProductGallery/>
            <TabComponent/>
            <CustomerReview/>
            <FindUs/>
        </div>
    );
};

export default Home;