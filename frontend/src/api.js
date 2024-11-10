import axios from 'axios';

// Selecciona la URL base según el entorno (desarrollo o producción)
const api = axios.create({
  baseURL: import.meta.env.MODE === 'development' 
    ? import.meta.env.VITE_API_URL_DEV 
    : import.meta.env.VITE_API_URL_PROD 
});

export default api;
