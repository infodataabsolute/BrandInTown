"use client";

import { ReactNode } from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Poppins } from "next/font/google";

/* ===========================
   Load Google Font
=========================== */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* ===========================
   React Query
=========================== */
const queryClient = new QueryClient();

/* ===========================
   Mantine Theme (linked to CSS variables)
=========================== */
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

/* ===========================
   Root Layout
=========================== */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider theme={theme} defaultColorScheme="light">
            {children}
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
