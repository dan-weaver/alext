ssh $DROPLET_USER@$DROPLET_IP 'docker stop alext'
ssh $DROPLET_USER@$DROPLET_IP 'docker rm alext'

ssh $DROPLET_USER@$DROPLET_IP 'docker rm alext'


echo "pulling image"
ssh $DROPLET_USER@$DROPLET_IP 'docker pull danweaver06/alext:latest'


echo "starting new container"
ssh $DROPLET_USER@$DROPLET_IP 'docker run -d --restart=always --name alext -p 80:80 danweaver06/alext:latest'

echo "Success"
exit 0
