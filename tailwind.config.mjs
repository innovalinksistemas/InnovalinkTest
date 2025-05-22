/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        lightline: 'lightline 2s ease-in-out infinite' ,
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(242,247,253,0.3))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(242,204,255,0.9))' },
        },
        lightline: {
          '0%': { opacity: 0.2, transform: 'translateX(-10px)' },
          '50%': { opacity: 1, transform: 'translateX(10px)' },
          '100%': { opacity: 0.2, transform: 'translateX(-10px)' },
        },
      },
    },
  },
	plugins: [
	],
}
