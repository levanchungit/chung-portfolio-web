import "./globals.css";
import "../styles/globals.scss";
import { League_Spartan } from "next/font/google";
import localFont from "next/font/local";

const league_spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const sometype_mono = localFont({
  src: [
    {
      path: "../fonts/SometypeMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SometypeMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/SometypeMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/SometypeMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SometypeMono-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/SometypeMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Chung Portfolio",
  description: "L",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${league_spartan.variable} ${sometype_mono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
