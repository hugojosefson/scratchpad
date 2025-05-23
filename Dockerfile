# syntax=docker/dockerfile:1
FROM denoland/deno:alpine-2.3.3

WORKDIR /app
USER deno

COPY . .
RUN deno cache src/cli.ts

ENTRYPOINT ["src/cli.ts"]
