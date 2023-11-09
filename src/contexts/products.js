import React, { createContext } from "react";

export const ProductContext = createContext([]);

function ProductProvider({children}){

    return(
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider