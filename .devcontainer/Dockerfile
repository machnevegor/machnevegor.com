# See https://github.com/denoland/deno_docker
ARG VARIANT=2.0.2

FROM denoland/deno:bin-${VARIANT} AS deno
FROM mcr.microsoft.com/devcontainers/typescript-node:20
COPY --from=deno /deno /usr/local/bin/deno
