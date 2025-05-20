module.exports = {
    darkMode: 'class', // Use class-based dark mode
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['DM Sans', 'sans-serif'],      // Primary sans font
          serif: ['Crimson Text', 'serif'],     // Serif for headings
          mono: ['Space Mono', 'monospace'],    // Monospace for tagline or code-like text
        },
        colors: {
          accent: 'var(--tw-color-violet-400)', // Accent color (violet)
        },
      },
    },
    plugins: [],
  }
  