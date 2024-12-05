import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/layout/layout";
import { DesktopPlaceholder } from "@/layout/desktopPlaceholder/desktopPlaceholder";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DesktopPlaceholder />
      <Component {...pageProps} />
    </Layout>
  );
}
