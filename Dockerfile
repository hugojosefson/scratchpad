# syntax=docker/dockerfile:1
FROM denoland/deno:alpine-2.9.7

WORKDIR /app
USER deno

COPY . .
RUN deno cache src/cli.ts

ENTRYPOINT ["deno", "run", "--cached-only", "src/cli.ts"]
