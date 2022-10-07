module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('HOST_PORT_TEST1'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
