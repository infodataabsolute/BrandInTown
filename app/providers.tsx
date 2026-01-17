"use client";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "brand",

  colors: {
    brand: [
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
      "var(--primary)",
    ],
  },

  fontFamily: "var(--font-primary)",

  headings: {
    fontFamily: "var(--font-primary)",
    fontWeight: "700",
  },

  components: {
    Button: {
      styles: {
        root: {
          backgroundColor: "var(--primary)",
          color: "var(--text-dark)",
          borderRadius: "var(--radius)",

          "&:hover": {
            backgroundColor: "var(--primary-dark)",
          },
        },
      },
    },

    Badge: {
      styles: {
        root: {
          backgroundColor: "var(--primary)",
          color: "#000",
        },
      },
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
