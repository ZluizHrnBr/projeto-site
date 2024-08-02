import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://localhost:8080/V1.0/api/Aluguel'
});

export default Instance;