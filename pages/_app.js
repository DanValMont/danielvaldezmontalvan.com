import "../styles/globals.css";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import Preloader from "../components/PreLoader/PreLoader.js";
import { InvertProvider } from "../context/invert.js";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      {!loading ? (
        <Fragment>
          <InvertProvider>
            <Component {...pageProps} />
          </InvertProvider>
        </Fragment>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
