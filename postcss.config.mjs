/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // <--- ESTA es la versión correcta (v3)
    autoprefixer: {},
  },
};

export default config;