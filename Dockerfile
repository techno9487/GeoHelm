FROM node
EXPOSE 3000
RUN apt-get update
RUN apt-get install -y wget jq
COPY . /usr/share/map-click/
RUN chmod 755 -R /usr/share/map-click/
ENTRYPOINT ["node", "/usr/share/map-click/server.js"]

