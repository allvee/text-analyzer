FROM node:20.11.0-alpine as buildStageA

WORKDIR /textAnalyzer

RUN npm install pm2

FROM node:20.11.0-alpine as buildStageB

WORKDIR /textAnalyzer

COPY package.json .

RUN npm install

FROM node:20.11.0-alpine

WORKDIR /textAnalyzer

ENV NODE_ENV=production
ENV APP_ENV=production

COPY --from=buildStageA /textAnalyzer /
COPY --from=buildStageB /textAnalyzer .

COPY . .

CMD ["/node_modules/pm2/bin/pm2-runtime", "server.js"]
