import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

// TODO : colors
import coloradix, { slate, orange } from "@coloradix/tailwindcss";

const radix = coloradix({
  slate,
  orange,
})
  .alias({
    neutral: "slate",
    primary: "orange",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
    extend: {
      fontFamily: {
        // TODO : fonts
        sans: ["Inter"].concat(defaultTheme.fontFamily.sans),
        mono: ["Roboto Mono"].concat(defaultTheme.fontFamily.mono),
      },
      animation: {
        'border': 'border 4s linear infinite',
      },
      keyframes: {
          'border': {
              to: { '--border-angle': '360deg' },
          }
      }                    
    },
  },
  plugins: [radix.plugin],
} satisfies Config;
