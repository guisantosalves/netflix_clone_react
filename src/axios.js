import axios from "axios";

//essa instancia pode fazer as requisições
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;