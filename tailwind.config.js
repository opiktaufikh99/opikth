/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container :{
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        biru: '#60a5fa',
        hejo: '#22c55e',
        abu :'#1e293b',
        emas : '#facc15',
        hideng:'#020617',
        drak: '#111827'
      },
      screens : {
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}

