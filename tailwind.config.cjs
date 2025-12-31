/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kogi: {
          green: "#0B3D2E",
          green2: "#0F5A42",
          gold: "#D4AF37",
          gold2: "#B8911C",
          blue: "#1E5AA8",
          ink: "#071B14",
          mist: "#F5F7F8"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.12)",
        lift: "0 20px 60px rgba(11,61,46,0.18)"
      },
      backgroundImage: {
        "premium-radial": "radial-gradient(1000px circle at 15% 25%, rgba(212,175,55,0.22), transparent 45%), radial-gradient(900px circle at 85% 25%, rgba(30,90,168,0.18), transparent 45%), radial-gradient(900px circle at 50% 90%, rgba(15,90,66,0.22), transparent 55%)"
      }
    }
  },
  plugins: []
};
