const dev = {
  API_ENDPOINT: 'http://localhost:8000',
  TOKEN_KEY: 'authToken',
  API_KEY: 'so_secret',
};

const prod = {
  API_ENDPOINT: 'https://AmazingName.herokuapp.com/',
  TOKEN_KEY: 'authToken',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  ...config,
};
