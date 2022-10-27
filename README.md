# Base for a phaser game

Its only an attempt

# Before you can run it

You need to have installed **Git**, **Docker** and **Docker Compose**:
- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Docker: https://docs.docker.com/engine/install/
- Docker Compose: https://docs.docker.com/compose/install/

Now you can **clone** this repository.

After the cloning, using a console, in the root of your local copy of the repository run:
```
docker compose run node npm install
```

# How to run it

Using a console, in the root of your local copy of the repository run:
```
docker compose up -d 
```
You can visit http://127.0.0.1:8080/ to check that it's working.

# How to stop it

Using a console, in the root of your local copy of the repository run:
```
docker compose stop
```

