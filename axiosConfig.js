import axios from 'axios';
import cors from 'cors';

// Configurar o CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Substitua pela origem permitida
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Defina os métodos permitidos
  allowedHeaders: ['Content-Type'], // Defina os cabeçalhos permitidos
  credentials: true, // Permitir envio de cookies
};

const instance = axios.create();

instance.defaults.baseURL = 'https://rails-express.vercel.app'; // Defina a URL base da API que você está solicitando
instance.defaults.headers.common['Access-Control-Allow-Origin'] = corsOptions.origin;
instance.defaults.headers.common['Access-Control-Allow-Methods'] = corsOptions.methods.join(', ');
instance.defaults.headers.common['Access-Control-Allow-Headers'] = corsOptions.allowedHeaders.join(', ');
instance.defaults.withCredentials = corsOptions.credentials;

const corsMiddleware = cors(corsOptions);

instance.interceptors.request.use(
  (config) => {
    return corsMiddleware(null, config, () => {
      return config;
    });
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;