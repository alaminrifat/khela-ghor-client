import Countdown from 'react-countdown';

const CountDown = () => {
    return (
        <div className='text-center my-10 text-6xl text-warning '>
            <Countdown className='font-extrabold' date={Date.now() + 10000000}></Countdown>
        </div>
    );
};

export default CountDown;