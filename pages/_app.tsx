import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import PlayerForm from "../components/PlayerForm";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { form } = router.query;

  return (
    <>
      {form === "1" && <PlayerForm />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
