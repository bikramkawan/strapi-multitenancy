module.exports = {
  apps: [
    {
      name: 'strapimultitest1',
      cwd: '/Users/bikramkawan/Bikram/strapi-multitenancy',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'strapimultitest1',
        HOST_PORT_TEST1: 1338,
        DATABASE_HOST_PRODUCTION: 'localhost',
        DATABASE_PORT_PRODUCTION: '3333',
        DATABASE_USER_PRODUCTION: 'root',
        DATABASE_PASS_PRODUCTION: 'root',
        DATABASE_NAME_TEST1: 'strapimultitest1',
        ADMIN_JWT_SECRET :'vzqLms-iwudoa-rgl2sp',
        DOMAIN_URL: 'localhost'
      }
    },
    {
      name: 'strapimultitest2',
      cwd: '/Users/bikramkawan/Bikram/strapi-multitenancy',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'strapimultitest2',
        HOST_PORT_TEST2: 1339,
        DATABASE_HOST_PRODUCTION: 'localhost',
        DATABASE_PORT_PRODUCTION: '3333',
        DATABASE_USER_PRODUCTION: 'root',
        DATABASE_PASS_PRODUCTION: 'root',
        DATABASE_NAME_TEST2: 'strapimultitest1',
        ADMIN_JWT_SECRET :'vzqLms-iwudoa-rgl2sp',
        DOMAIN_URL: 'localhost'
      }
    }
  ]
};
