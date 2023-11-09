import React, { createContext, useState } from "react";

export const ProductContext = createContext([]);

function ProductProvider({children}){

    const [ products, setProducts ] = useState([]);

    const addProduct = (product)=>{
        setProducts([...products, product])
        console.log(products)
    }

    const removeProduct = (product)=>{
        const filtred = products.filter((item)=>{
            return item.id != product.id
        })
        setProducts(filtred)
    }

    const updateQuantite = (product)=>{
        let filtred = products.filter((item)=>{
            return item.id != product.id
        })
        filtred.push(product)
        setProducts(filtred)
    }

    return(
        <ProductContext.Provider value={{products, addProduct, removeProduct, updateQuantite}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider