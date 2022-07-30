import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "Hey" }]);
  if (!hello.data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Key Race</title>
        <meta name="description" content="Key Race is a clone of TypeRacer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5 text-center">
        <h1 className="text-2xl mb-1">Welcome to Key Race</h1>
        <p>{hello.data.greeting}</p>

        <p className="mb-5">
          Key Race is a clone of{" "}
          <a
            className="underline text-blue-600 hover:text-blue-700"
            href="https://play.typeracer.com/"
            target="_blank"
            rel="noreferrer"
          >
            TypeRacer
          </a>
          .
        </p>

        <Button>Start a race</Button>
      </main>
    </div>
  );
};

export default Home;
