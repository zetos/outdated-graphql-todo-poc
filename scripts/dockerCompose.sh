#!/usr/bin/env bash

cd ..

docker build -t zetos/todoapi -f Dockerfile .
docker-compose up -d