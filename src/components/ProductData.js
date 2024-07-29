import React, { createContext, useState } from "react";
import { productsData } from "../datas";
export const ProductDataContext = createContext();

function ProductDataProvider({ children }) {
  const [productsInfo, setProductsInfo] = useState(productsData);
  return (
    <ProductDataContext.Provider value={{ productsInfo, setProductsInfo }}>
      {children}
    </ProductDataContext.Provider>
  );
}

export default ProductDataProvider;
