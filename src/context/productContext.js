import { createContext, useContext, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';

export const ProductContext = createContext({
    products: [],
    setProduct: () => {},
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts ] = useState([]);

    useEffect(() => {
        // console.log(1);
        productApi.getProducts().then((res) => {
            setProducts([...res.data]);
        });
    }, []);

    const setProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <ProductContext.Provider value={{ products, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    return useContext(ProductContext);
};
