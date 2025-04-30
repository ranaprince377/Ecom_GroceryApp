const getProducts = async () => {
    const response = await fetch('http://localhost:3000/api/product');

    if(response.ok) {
        const data = await response.json();
        return data.data; 
    }
}

export { getProducts };
export default getProducts;