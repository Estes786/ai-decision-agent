/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", // Pindai file HTML di root proyek
    "./src/**/*.{js,ts,jsx,tsx}", // Pindai file JS/TS/JSX/TSX di folder src
    // Anda bisa menambahkan jalur lain di sini jika Anda memiliki file di folder lain
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

