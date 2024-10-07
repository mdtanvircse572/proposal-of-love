/** @type {import('tailwindcss').Config} */
module.exports = {
    // Scan all HTML and JS files in the current folder and src folder
    content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
    theme: {
        extend: {
            // Example of extending theme with custom colors
            colors: {
                customGreen: '#10B981',
                customRed: '#EF4444',
            },
        },
    },
    plugins: [],
  }