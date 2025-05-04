import config from '../config.js';

const API_URL = `${config.API_BASE_URL}/category`;

const fetchCategory = async () =>{
    const response = await fetch(API_URL);

    if(response.ok){
        const data = await response.json();
        return data.data; 
    }
}

export { fetchCategory }