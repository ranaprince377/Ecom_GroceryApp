import config from '../config.js';


const getProducts = async () => {
    const API_URL = `${config.API_BASE_URL}/product`;
    const response = await fetch(API_URL);

    if(response.ok) {
        const data = await response.json();
        return data.data; 
    }
}

const getProductsByCategoryId = async (catId) =>{
    const API_URL = `${config.API_BASE_URL}/product`;

}
export { getProducts };
export default getProducts;