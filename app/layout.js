import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Whatsapp from "@/components/Whatsapp";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "dswd",
  description: "secz",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body className={`${poppins.className} antialiased`}>
        <Whatsapp />

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}