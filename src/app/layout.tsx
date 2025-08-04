import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // same as `&display=swap`
});

export const metadata = {
  title: "Studaro",
  description: "The best productivity tool for students",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
      />
    </head>
    <body className="bg-dark">{children}</body>
    </html>
  );
}
