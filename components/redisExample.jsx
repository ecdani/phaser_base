import React from "react";
import { createClient } from "redis";
import Image from "next/image";
import Card from "./Card";

const { REDIS_URL } = process.env;

async function RedisExample(props) {
  const { data } = props;
  return (
    <Card
      title={
        <>
          <Image
            className="inline mr-3"
            src="/redis-icon.svg"
            alt="Redis Logo"
            width={32}
            height={32}
          />
          Proofs of Redis working &rarr;
        </>
      }
    >
      <div className="text-xl flex flex-col gap-4">
        <p>
          Ping! <span className="font-medium">{data.ping}</span>
        </p>
        <p>
          Hi! <span className="font-medium">{data.test}</span>
        </p>
        <p>
          Counting visits: <span className="font-medium">{data.visits}</span>
        </p>
      </div>
    </Card>
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
