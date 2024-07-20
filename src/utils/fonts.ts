import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bwGradual = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BwGradual-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BwGradual-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BwGradual-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bw-gradual",
});

export { inter, bwGradual };
