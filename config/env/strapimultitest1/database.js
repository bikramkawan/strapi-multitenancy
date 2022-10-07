module.exports = ({ env }) => {
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'mysql',
          charset: 'utf8mb4',
          host: env('DATABASE_HOST_PRODUCTION'),
          port: 3333,
          database: env('DATABASE_NAME_TEST1'),
          username: env('DATABASE_USER_PRODUCTION'),
          password: env('DATABASE_PASS_PRODUCTION')
        },
        options: {}
      }
    }
  };
};
