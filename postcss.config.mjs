/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // ✅ Use "tailwindcss" NOT "@tailwindcss/postcss"
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
