/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        // Subject card gradients from ncert-data.ts
        'from-blue-500', 'to-cyan-500',
        'from-green-500', 'to-emerald-500',
        'from-amber-500', 'to-orange-500',
        'from-rose-500', 'to-pink-500',
        'from-violet-500', 'to-purple-500',
        'from-teal-500', 'to-cyan-600',
        // Subject text colors
        'text-blue-600', 'text-green-600', 'text-amber-600',
        'text-rose-600', 'text-violet-600', 'text-teal-600',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
