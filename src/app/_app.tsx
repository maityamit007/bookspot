import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxProvider } from "@/redux/provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ReduxProvider>
        <Component {...pageProps} />;
      </ReduxProvider>
    </NextUIProvider>
  );
}
