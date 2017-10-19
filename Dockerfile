FROM node:6.11.2-wheezy
 
 
RUN npm install -g composer-cli generator-hyperledger-composer composer-rest-server yo composer-playground
 
USER node
 
WORKDIR /app/projects
 
EXPOSE 8080 3000 4200
 
CMD ["/bin/bash"]
 
 