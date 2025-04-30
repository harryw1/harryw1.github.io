/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f1',
          100: '#c3ebde',
          200: '#9fdfca',
          300: '#7ad3b6',
          400: '#56c8a2',
          500: '#33bc8e',
          600: '#1a936f', // Main primary color (from existing site)
          700: '#14775a',
          800: '#0f5e46',
          900: '#0a4531',
        },
        secondary: {
          DEFAULT: '#114b5f', // Secondary color (from existing site)
        },
        accent: {
          DEFAULT: '#88d498', // Accent color (from existing site)
        },
        dark: '#121212',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            'h2,h3,h4': {
              color: theme('colors.gray.900'),
              'scroll-margin-top': '6rem',
            },
            code: {
              color: theme('colors.indigo.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.indigo.300'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
