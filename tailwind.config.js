module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      textColor: {
        primary: 'blue',
        'variable-primary': 'var(--color-text-primary)',
      },
    },
  },
  plugins: [],
};
