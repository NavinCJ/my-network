FROM node:6.11.4-wheezy

WORKDIR /app/my-network

COPY package.json .

RUN npm install

COPY . .

#RUN npm install gulp
#RUN npm install

#RUN mkdir /root/.hfc-key-store/

# Ensure that the fabric setup is up and running before install and instantiate chaincode is ran using the below two commands
#RUN node scripts/install_chaincode.js
#RUN node scripts/instantiate_chaincode.js

ENV PATH=$PATH:/app/my-network/node_modules/.bin
#ENV http_proxy ""
#ENV https_proxy ""

#CMD ["gulp","marbles_local"] #node_modules/.bin/gulp marbles_local
#CMD ["gulp","marbles_local"] 
CMD ["/bin/bash"]