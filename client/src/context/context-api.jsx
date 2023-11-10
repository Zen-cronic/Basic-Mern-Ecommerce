import axios from "axios"

export async function getNumOfProducts() {
    try {
        const response = await axios.get("http://localhost:5005/products/products-count")
        return response.data.numOfProducts
    
      } catch (error) {
        console.error(error)
      }
}

export async function getProducts() {
    
    try {
        const response = await axios.get("http://localhost:5005/products")
        console.log(response.data.products)
        return response.data.products
   //setProducts
    
      } catch (error) {
        console.error(error)
      }
}