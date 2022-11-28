import React from "react";
import Head from "next/head";
import Image from "next/image";
import Game from "../components/game";
import RedisExample from "../components/redisExample";
import Card from "../components/Card";

export default async function Page() {
  const data = await RedisExample.getServerSideData();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full md:w-auto mb-6">
        <header className="text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{" "}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              pages/index.tsx
            </code>
          </p>
        </header>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Game />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 max-w-4xl sm:w-full px-4">
          <Card title="Proof of tailwind working &rarr;">
            <div className="bg-gray-100 p-3 font-mono text-lg text-left underline decoration-pink-500">
              <code> Underlined pink text 💗</code>
            </div>
          </Card>

          <RedisExample data={data} />

          <a
            href="https://nextjs.org/docs"
            className="hover:text-blue-600 active:text-blue-500"
          >
            <Card title="Documentation &rarr;">
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </Card>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="hover:text-blue-600 active:text-blue-500"
          >
            <Card title="Learn &rarr;">
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </Card>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="hover:text-blue-600 active:text-blue-500"
          >
            <Card title="Examples &rarr;">
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </Card>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="hover:text-blue-600 active:text-blue-500"
          >
            <Card title="Deploy &rarr;">
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </Card>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}
