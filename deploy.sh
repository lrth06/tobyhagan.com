docker build . -t tobyhagan.com && \
docker run -p 3000:3000 --env-file ./.env tobyhagan.com
