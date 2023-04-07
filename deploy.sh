export TAG=`date +%Y%m%d-%H%M%S`
docker-compose -f docker-compose.build.yaml build
gcloud auth configure-docker     me-west1-docker.pkg.dev
docker-compose -f docker-compose.build.yaml push
gcloud run services update haparlament --region=me-west1 --image=me-west1-docker.pkg.dev/haparlament/haparlament-repo/haparlament:$TAG