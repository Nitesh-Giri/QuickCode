import dedent from "dedent";

export default {
  SUGGSTIONS: [
    "Create ToDo App in React",
    "Create Budget Track App",
    "Create Quizz App On History",
    "Create Gym Managment Portal Dashboard",
    "Create Login Signup Screen",
  ],
  HERO_HEADING: "What innovation will you lead?",
  HERO_DESC: "From idea to app in seconds with your personal full-stack engineer.",
  INPUT_PLACEHOLDER: "What do you aspire to build?",
  SIGNIN_HEADING: "Continue With QuickCode",
  SIGNIN_SUBHEADING:
    "To use QuickCode you must log into an existing account or create one.",
  SIGNIn_AGREEMENT_TEXT:
    "By using QuickCode, you agree to the collection of usage data for analytics.",

  DEFAULT_FILE: {
    "/index.html": {
code: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
    },
    "/styles.css": {
      code: `
@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
    "/tailwind.config.js": {
      code: `
            /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
    },
    "/postcss.config.js": {
      code: `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
`,
    },
  },
  DEPENDANCY: {
    postcss: "^8",
    tailwindcss: "^3.4.1",
    autoprefixer: "^10.0.0",
    uuid4: "^2.0.3",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "lucide-react": "^0.469.0",
    "react-router-dom": "^7.1.1",
    firebase: "^11.1.0",
    "@google/generative-ai": "^0.21.0",
    "date-fns": "^4.1.0",
    "react-chartjs-2": "^5.3.0",
    "chart.js": "^4.4.7",
    "vite": "^6.2.0",
    "@rollup/wasm-node": "^4.0.0",
  },
  PRICING_DESC:
    "Start with a free account to speed up your workflow on public projects or boost your entire team with instantly-opening production environments.",
  PRICING_OPTIONS: [
    {
      name: "Basic",
      tokens: "50K",
      value: 50000,
      desc: "Ideal for hobbyists and casual users for light, exploratory use.",
      price: 4.99,
    },
    {
      name: "Starter",
      tokens: "120K",
      value: 120000,
      desc: "Designed for professionals who need to use QuickCode a few times per week.",
      price: 9.99,
    },
    {
      name: "Pro",
      tokens: "2.5M",
      value: 2500000,
      desc: "Designed for professionals who need to use QuickCode a few times per week.",
      price: 19.99,
    },
    {
      name: "10M",
      tokens: "10M",
      value: 10000000,
      desc: "Designed for professionals who need to use QuickCode a few times per week.",
      price: 49.99,
    },
  ],
};
