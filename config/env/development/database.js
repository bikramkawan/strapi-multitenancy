
module.exports = ({ env }) => {
  // Adapt database config based on environment
  const environment = env('NODE_ENV');

  // Parse database string into several parts

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "mysql",
          charset: 'utf8mb4',
          host: env('DATABASE_HOST'),
          port: env('DATABASE_PORT'),
          database: env('DATABASE_NAME'),
          username: env('DATABASE_USER'),
          password: env('DATABASE_PASS'),
          // Only enable SSL connections in production
          ...environment === 'production' && {
            ssl: { rejectUnauthorized: false },
          }
        },
        options: {}
      }
    }
  }
};


