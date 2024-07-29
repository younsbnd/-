import React, { useContext, useEffect, useState } from "react";
import "./product.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { productsData } from "../../../datas";
import { ProductDataContext } from "../../../components/ProductData";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const { productsInfo, setProductsInfo } = useContext(ProductDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(productsInfo.filter((p) => p.id == params.id));
  }, []);

  useEffect(() => {
    if (product) {
      setName(product[0].name);
      setStock(product[0].stock);
      setPrice(product[0].price);
    }
  }, [product]);

  const changeHandler = (e) => {
    e.preventDefault();
    let products = [...productsInfo];
    const updatedProduct = {
      id: params.id,
      name: name,
      stock: stock,
      price: price,
      img: product[0].img,
    };
    products[params.id - 1] = updatedProduct;

    setProductsInfo(products);

    navigate("/products?success=true");
  };

  return (
    <div className="productContainer">
      <div>
        <h2>Edit Product</h2>
      </div>
      <div className="productMain">
        <form onSubmit={changeHandler} className="productForm">
          <TextField
            label="name"
            className="productInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="stock"
            value={stock}
            className="productInput"
            sx={{ margin: "20px 0" }}
            onChange={(e) => setStock(e.target.value)}
          />
          <TextField
            label="price"
            value={price}
            className="productInput"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button
            type="submit"
            className="productBtn"
            color="info"
            variant="outlined"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Product;
