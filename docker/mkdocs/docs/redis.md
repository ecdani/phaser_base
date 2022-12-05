# About Redis

## How can we see the database?
You can explore it visually using **Redis commander**, wich is a database management tool. You can access it by visiting <http://localhost:8081/>

!!! warning

    Ports may vary. Please check it with: `docker compose ps`

**OR** 

You can connect to Redis command line executing:

```bash
docker exec -it phaser_base-redis redis-cli
```

## Where is the official documentation of all of this?

- Docker oficial image of Redis: <https://hub.docker.com/_/redis>

- Docker oficial image of Redis commander: <https://hub.docker.com/r/rediscommander/redis-commander>