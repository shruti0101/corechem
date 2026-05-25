import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Whatsapp from "@/components/Whatsapp";

export const metadata = {
  title:
    "dswd",
  description:
    "secz",
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
        {/* Helvetica Font */}
        <style>{`
          body {
            font-family: Helvetica, Arial, sans-serif;
          }
        `}</style>

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">
        <Whatsapp />

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}