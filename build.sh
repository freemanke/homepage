docker build -t hub.infervision.com/kzhiguang/homepage:latest ./
docker push hub.infervision.com/kzhiguang/homepage:latest

docker tag hub.infervision.com/kzhiguang/homepage:latest home.freemanke.com:60013/freemanke/homepage:latest
docker push home.freemanke.com:60013/freemanke/homepage:latest
