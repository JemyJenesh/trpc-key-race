import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Key Race</title>
        <meta name="description" content="Key Race is a clone of TypeRacer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5">
        <h1 className="text-center text-2xl">Welcome to Key Race</h1>

        <p className="text-center">
          Key Race is a clone of{" "}
          <a
            className="underline text-blue-600 hover:text-blue-700"
            href="https://play.typeracer.com/"
            target="_blank"
          >
            TypeRacer
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Home;
