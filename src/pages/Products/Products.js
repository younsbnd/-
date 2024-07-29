import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect } from "react";
import { productsData } from "../../datas";
import "./products.scss";
import { Link, useSearchParams } from "react-router-dom";
import { ProductDataContext } from "../../components/ProductData";
import { Alert } from "@mui/material";

function Products() {
  const { productsInfo, setProductsInfo } = useContext(ProductDataContext);
  const [showAlert, setShowAlert] = React.useState(false);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("success"));
  const deleteHandler = (id) => {
    setProductsInfo(productsInfo.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (searchParams.get("success") == "true") {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [productsInfo]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "NAME",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="products">
            <img
              src={params.row.img}
              alt={params.row.name}
              className="productImg"
            />
            <p>{params.row.name}</p>
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "STOCK",
      width: 80,
    },
    {
      field: "price",
      headerName: "PRICE",
      width: 120,
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/products/${params.row.id}`} className="productListEdit">
              Edit
            </Link>
            <button
              onClick={() => deleteHandler(params.row.id)}
              className="productListDelete"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {showAlert && (
        <Alert severity="success">Changes were successfully saved </Alert>
      )}
      <DataGrid
        sx={{ width: "100%", height: "800px" }}
        rows={productsInfo}
        columns={columns}
        Z
      />
    </div>
  );
}

export default Products;
