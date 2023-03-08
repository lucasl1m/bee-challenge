const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#0F0F0F',
                },
                secondary: {
                    500: '#EBB932',
                    300: '#F1CD6D',
                },
                neutral: {
                    800: '#2F2F2F',
                    500: '#666666',
                    300: '#E0E0E0',
                    200: '#EDEDED',
                    100: '#FBFBFB',
                },
                positive: {
                    500: '#24A148',
                },
                negative: {
                    500: '#DA1E28',
                },
            },

            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem',
                lg: '1.25rem',
                xl: '1.5rem',
                '2xl': '2rem',
                '3xl': '3rem',
            },

            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },

            borderRadius: {
                DEFAULT: '8px',
                base: '16px',
                pill: '99px',
            },

            boxShadow: {
                DEFAULT: '0px 16px 48px rgba(0, 0, 0, 0.24)',
            },
        },
    },
    plugins: [],
};
