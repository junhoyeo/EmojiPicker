// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  plugins: [reactRefresh()],
  base: process.env["base"] || "/EmojiPicker/",	
}