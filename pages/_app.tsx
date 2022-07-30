import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import PlayerForm from "../components/PlayerForm";
import { useRouter } from "next/router";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "./api/trpc/[trpc]";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { form } = router.query;
  const showForm = form === "1";

  return (
    <>
      {showForm && <PlayerForm />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default withTRPC<AppRouter>({
  config: ({ ctx }) => {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
    };
  },
  ssr: true,
})(MyApp);
