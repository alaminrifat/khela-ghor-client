const CustomerReview = () => {
    return (
        <div className="mx-5 md:mx-28 my-32 ">
            <section className="text-neutral-700 dark:text-neutral-300">
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <p className=" text-4xl md:text-6xl font-bold text-center my-16  ">
                        What our customer say
                    </p>
                    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        At Khelaghor, we truly value the opinions and
                        experiences of our customers. We take great pride in
                        being a trusted toy shop, and customer reviews
                        contribute to building the trust and confidence of our
                        potential customers.{" "}
                    </p>
                </div>

                {/* <!--First Testimonial--> */}
                <div className="grid gap-10 text-center md:grid-cols-3">
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Maria Smantha
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Khelaghor offers a wide range of educational
                                    toys that have greatly helped in fostering
                                    my child's curiosity and love for learning
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Second Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Lisa Cudrow
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    The quality of toys from Khelaghor is
                                    exceptional, and their customer service team
                                    promptly addressed any concerns I had,
                                    making my shopping experience delightful.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Third Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    John Smith
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    I appreciate Khelaghor's commitment to
                                    providing safe and eco-friendly toys,
                                    ensuring the well-being of my child while
                                    promoting sustainable practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerReview;
