import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "~/context/LanguageContext";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <LanguageProvider>
      <Component {...pageProps} />
      <Analytics />
      </LanguageProvider>
    </>
  );
};

export default MyApp;
