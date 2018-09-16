FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /
WORKDIR /
COPY ./ /var/www/html

RUN yarn install

CMD if [ ${APP_ENV} = production ]; \
	then \
	cd android && \
	./gradlew assembleRelease \
	;fi	

EXPOSE 3000