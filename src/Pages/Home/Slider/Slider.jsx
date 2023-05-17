const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/f1Vpc3Y/1.webp"
                    className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-khela    border-0">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle bg-khela    border-0">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/zGty84r/2.webp"
                    className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-khela    border-0">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle bg-khela    border-0">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/9T6vGMm/3.webp"
                    className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-khela    border-0">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle bg-khela    border-0">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
