/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors:{
            'khela':'#F8D631'
        },
        extend: {},
    },
    // eslint-disable-next-line
    plugins: [require("daisyui")],
};
