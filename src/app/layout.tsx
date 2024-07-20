import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import LayoutProvider from "@/providers/layout-provider";
import ModalProvider from "@/providers/modal-provider";
import { withBasePath } from "@/utils/helpers";

export const metadata: Metadata = {
  title: {
    default: "Company Name",
    template: "%s | Company",
  },
  description: "",
};

/** Root layout of the application. */
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href={withBasePath("/assets/images/favicon.png")}
      />
      <link rel="icon" href={withBasePath("/assets/images/favicon.png")} />
      <body className={`font-serif text-sm text-black`}>
        <ModalProvider />
        <LayoutProvider>
          <Toaster position="top-right" />
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
