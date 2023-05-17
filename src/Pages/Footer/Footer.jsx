import logo from '../../assets/logo.png'
const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0,0);
      }
    return (
        <footer aria-label="Site Footer" className="bg-gray-100">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <button
                    onClick={handleClick}
                        className="inline-block rounded-full bg-khela p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
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
                            <img src={logo} alt="" className='w-24'/>
                            
                        </div>
                        <h1 className='text-2xl font-bold'>Khela Ghor</h1>
                        <p>
                            Trusted Kids Scientific Toys
                        </p>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Incidunt consequuntur amet culpa cum itaque
                            neque.
                        </p>
                    </div>

                    <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
                        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="/"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="/"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="/"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="/"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
