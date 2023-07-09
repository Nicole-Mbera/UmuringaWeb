import {productActions} from './index';
import {registerProduct,getAllProducts} from './services';

export const getAllProductActions=()=>async(dispatch)=>{
    dispatch(productActions.setIsFetching(true));
    try {
        const res= await getAllProducts();
        if(res?.status===200){
            dispatch(productActions.setIsFetching(false));
            dispatch(productActions.setProducts(res?.data))

        }
        dispatch(productActions.setIsFetching(false))
    } catch (error) {
        console.log("Error: "+error)
        
    }
}

export const createProductActions=(data)=>async(dispatch)=>{
    dispatch(productActions.setIsFetching(true));
    try {
        const res= await registerProduct(data);
        if(res?.status===200){
            const resAll=await getAllProducts();
            dispatch(productActions.setIsFetching(false));
            dispatch(productActions.setProducts(resAll?.data))

        }
        dispatch(productActions.setIsFetching(false))
    } catch (error) {
        console.log("Error: "+error)
        
    }
}
