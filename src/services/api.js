import axios from 'axios';

export const baseURL = "https://api.github.com/search"

const api = axios.create({
  baseURL,
});

export default api;

// Pasta para a abertura do axios para fazer as requisições a api do github
// Ao inves de usar a função fetch nativa do react utilizei axios para melhor organização de código e diminuição no tamanho do link de requisição.