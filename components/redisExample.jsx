import React from "react";
import { createClient } from "redis";
import Image from "next/image";

const { REDIS_URL } = process.env;

async function RedisExample(props) {
  const { data } = props;
  return (
    <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
      <h3 className="text-2xl font-bold">
        <Image
          className="inline mr-3"
          src="/redis-icon.svg"
          alt="Redis Logo"
          width={32}
          height={32}
        />
        Proofs of Redis working &rarr;
      </h3>
      <p className="mt-4 text-xl">
        {" "}
        Ping! <span className="font-medium">{data.ping}</span>
      </p>
      <p className="mt-4 text-xl">
        {" "}
        Hi! <span className="font-medium">{data.test}</span>
      </p>
      <p className="mt-4 text-xl">
        {" "}
        Counting visits: <span className="font-medium">{data.visits}</span>
      </p>
    </div>
  );
}

RedisExample.getServerSideData = async () => {
  try {
    const client = createClient({ url: REDIS_URL });

    client.on("error", () => {
      console.log("Error occured while connecting or accessing redis server");
    });

    await client.connect();

    const ping = await client.ping();
    await client.set("test", "Hello from redis!");
    const testValue = await client.get("test");

    let visits = 0;
    if (await client.exists("visits")) {
      visits = await client.get("visits");
      await client.set("visits", parseInt(visits, 10) + 1);
    } else {
      client.set("visits", 0);
    }
    await client.quit();
    return { ping, test: testValue, visits };
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default RedisExample;
