const baseURL = 'http://10.0.2.2:3008/products';

export let getProducts = () => fetch(baseURL)
    .then((response) => response.json())
    .then(json => json)
    .catch(err => console.log(err));

export let getProductsById = (id) => fetch(`${baseURL}/${id}`)
    .then((response) => response.json());