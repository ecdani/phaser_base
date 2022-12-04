import { createClient } from "redis";

const { REDIS_URL } = process.env;

const client = createClient({ url: REDIS_URL });

client.on("error", () => {
  console.log("Error occured while connecting or accessing redis server");
});

export default client;
