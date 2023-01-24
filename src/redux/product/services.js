import axios from "axios";

export const registerProduct= async (data) =>{
    try {
        const res= await axios.post("http://localhost:7000/product/registerProduct", data)

        return res;
    } catch (error) {
        console.log('error from axios: ',error)
    }
};

export const getAllProducts=async() =>{
    try {
        const res= await axios.get("http://localhost:7000/product/allproducts")
        return res;
    } catch (error) {
        console.log('error from axios: ',error)
    }
};

