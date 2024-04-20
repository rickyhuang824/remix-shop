import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        // colors: {},
        fontFamily: { prompt: ["Prompt"] },
        extend: {
            colors: {},
        },
    },
    plugins: [require('@headlessui/tailwindcss')],
} satisfies Config;
