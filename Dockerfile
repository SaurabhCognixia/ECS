FROM public.ecr.aws/docker/library/node:24.14.1-alpine3.23
WORKDIR /app
COPY app.js .
EXPOSE 80
CMD ["node", "app.js"]
