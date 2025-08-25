# syntax=docker/dockerfile:1
FROM denoland/deno:alpine-2.4.5

WORKDIR /app
USER deno

COPY . .
RUN deno cache src/cli.ts

ENTRYPOINT ["src/cli.ts"]
