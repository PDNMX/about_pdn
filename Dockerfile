FROM node:10-alpine

MAINTAINER Sergio Rodríguez <sergio.rdzsg@gmail.com>

ADD . /about_pdn
WORKDIR /about_pdn

RUN yarn add global yarn \
&& yarn install \
&& yarn build \
&& yarn global add serve \
&& yarn cache clean

EXPOSE 5000

CMD ["serve", "-s", "build"]
