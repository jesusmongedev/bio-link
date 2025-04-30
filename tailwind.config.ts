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
      secondary: 'var(--aw-color-secondary)',
      accent: 'var(--aw-color-accent)',
      default: 'var(--aw-color-text-default)',
      muted: 'var(--aw-color-text-muted)',
      whatsapp: 'var(--aw-color-whatsapp)',
      ...radix.colors,
    },
    extend: {
      fontFamily: {
        // TODO : fonts
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
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
  plugins: [radix.plugin, ],
} satisfies Config;
