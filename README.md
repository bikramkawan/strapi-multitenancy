# Strapi application

A quick description of your strapi application

# Update Configuration for your environment
* .env
* ecosystem.config.js ( Change environment variables for multi-tenant)
* config/env/strapimultitest*/database.js
* config/env/strapimultitest*/server.js

#Develop

`npm i && npm run develop`

#Run Multitenancy

`npm install pm2@latest -g`

`pm2 start ecosystem.config.js`