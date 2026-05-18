/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ash: '#8b8b8b',
        storm: '#2a2a2a',
        ember: '#d4a574',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'rgb(229, 231, 235)',
            '--tw-prose-headings': 'rgb(243, 244, 246)',
            '--tw-prose-lead': 'rgb(209, 213, 219)',
            '--tw-prose-links': 'rgb(212, 165, 116)',
            '--tw-prose-bold': 'rgb(243, 244, 246)',
            '--tw-prose-counters': 'rgb(156, 163, 175)',
            '--tw-prose-bullets': 'rgb(107, 114, 128)',
            '--tw-prose-hr': 'rgb(55, 65, 81)',
            '--tw-prose-quotes': 'rgb(209, 213, 219)',
            '--tw-prose-quote-borders': 'rgb(55, 65, 81)',
            '--tw-prose-captions': 'rgb(156, 163, 175)',
            '--tw-prose-code': 'rgb(243, 244, 246)',
            '--tw-prose-pre-code': 'rgb(229, 231, 235)',
            '--tw-prose-pre-bg': 'rgb(17, 24, 39)',
            '--tw-prose-th-borders': 'rgb(75, 85, 99)',
            '--tw-prose-td-borders': 'rgb(55, 65, 81)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
