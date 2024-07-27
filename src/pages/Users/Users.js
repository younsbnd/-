import React from "react";
import "./users.scss";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

function Users() {
  const [userDatas, setUserDatas] = React.useState(userRows);
  const deleteHandler = (id) => {
    setUserDatas(userDatas.filter((item) => item.id !== id));
  };

  const ColumnsData = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={params.row.avatar}
              alt={params.row.username}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top",
                marginRight: "10px",
                border: "1px solid #ccc",
              }}
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={"/user/" + params.row.id}
              style={{
                backgroundColor: "teal",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "5px",
                textDecoration: "none",
              }}
            >
              Edit
            </Link>
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => deleteHandler(params.row.id)}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <DataGrid
        sx={{ width: "100%" ,}}
        rows={userDatas}
        columns={ColumnsData}
        pageSize={5}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Users;
