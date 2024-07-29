import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Products/product/Product";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/new-user",
    element: <NewUser />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  }
];

export default routes;
