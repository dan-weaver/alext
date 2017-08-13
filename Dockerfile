FROM kyma/docker-nginx
ENV LANG C.UTF-8
COPY public/ /var/www
CMD 'nginx'
