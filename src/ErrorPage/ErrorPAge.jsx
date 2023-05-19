import { Link } from "react-router-dom";
import animation from "../assets/404.gif";

const ErrorPAge = () => {
    return (
        <section className="flex items-center h-screen p-16 ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <p className="text-8xl font-bold text-error animate-ping">
                        404
                    </p>
                    <img src={animation} alt="" className="w-full my-4" />
                    <p className=" mb-4 text-slate-400 text-xl">Sorry we are unable to load the page you want <br /> Please go back to home page</p>
                    <Link
                        to="/"
                        className="btn bg-warning border-none  hover:bg-yellow-600 hover:animate-pulse"
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPAge;
