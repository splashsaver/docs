import { Inter } from "@next/font/google";
import "nextra-theme-docs/style.css";
import { AppProps } from "next/app";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
