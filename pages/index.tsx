import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const router = useRouter();

  const handleStart = () =>
    router.push({ pathname: "/", query: { form: "1" } });

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

      <main className="p-5 flex flex-col items-center">
        <p className="text-2xl mb-2">Hi {hello.data.greeting}</p>
        <h1 className="text-4xl mb-1">Welcome to Key Race</h1>

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

        <Button onClick={handleStart}>Start a race</Button>
      </main>
    </div>
  );
};

export default Home;
