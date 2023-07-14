FROM node:18.15.0
WORKDIR /home/node/server
COPY . .
RUN yarn
EXPOSE 3001
CMD [ "yarn", "dev" ]