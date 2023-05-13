import { defineConfig } from "vite";
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  env: {
    OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY
  },
  plugins: [
    // plugins
  ],
  server: {
    host: true,
    port: 5173, // change port number if you prefer
  },
});
