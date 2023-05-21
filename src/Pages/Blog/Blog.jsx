import React from 'react';
import setTitle from '../../hook/setTitle';
import Pdf from "react-to-pdf";
import Answers from "./Answers";
const ref = React.createRef();

const Blog = () => {
    setTitle('Blog');
    const options = {
        orientation: "landscape",
        unit: "in",
    };
    return (
        <div>
            <div className="flex justify-end">
                <Pdf
                    targetRef={ref}
                    filename="question_answer.pdf"
                    options={options}
                    scale={0.7}
                >
                    {({ toPdf }) => (
                        <button
                            className="btn btn-error text-white mt-8   me-8"
                            onClick={toPdf}
                        >
                         Download Pdf
                        </button>
                    )}
                </Pdf>
            </div>
            <div className=" ms-4 p-4" ref={ref}>
                <Answers></Answers>
            </div>
        </div>
    );

};


export default Blog;