import React from "react";
import Image from "next/image";
import redisClient from "../services/redis";
import Card from "./Card";

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
    const test = "Hello from redis!";
    await redisClient.connect();

    const [ping, visits] = await Promise.all([
      redisClient.ping(),
      redisClient.incr("visits"),
      redisClient.set("test", test),
    ]);

    await redisClient.quit();

    return { ping, test, visits };
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default RedisExample;
