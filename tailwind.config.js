module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bitcoin:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
        ethereum:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)",
        solana:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
        binance:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
        shiba:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)",
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit, 18rem)",
      },
    },
  },
  plugins: [],
};
