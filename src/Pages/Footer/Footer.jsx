import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <footer
            aria-label="Site Footer"
            className="bg-gray-200 border-t-4 border-warning "
        >
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <button
                        onClick={handleClick}
                        className="inline-block rounded-full bg-warning p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
                        href="#MainContent"
                    >
                        <span className="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 "
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start">
                            <img src={logo} alt="" className="w-24" />
                        </div>
                        <h1 className="text-2xl font-bold">Khela Ghor</h1>
                        <p>Trusted Kids Scientific Toys</p>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Discover a world of scientific wonder at Khela Ghor,
                            your premier destination for educational toys and
                            resources. Our carefully curated collection brings
                            science to life, engaging young minds through
                            hands-on experiments and captivating discoveries.
                        </p>
                        <div className="mt-6 flex gap-6 justify-center md:justify-start">
                            <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-500"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link> 
                            <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-red-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link> 
                            <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-500"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                        </div>
                    </div>

                    <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
                        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/alltoys"
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/blog"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2023. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
