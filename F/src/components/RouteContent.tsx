import Login from "containers/login/Login";
import Register from "containers/login/Register";
import AddProduct from "containers/product/AddProduct";
import ProductList from "containers/product/ProductList";
import UpdateProduct from "containers/product/ProductUpdate";
import Protected from "containers/pages/Protected";
import ShowProduct from "containers/product/ShowProduct";
import SearchProduct from "containers/pages/ResultSearch";
import { Route, Routes } from "react-router-dom";
import Main from "containers/pages/Main";
import CardSession from "containers/pages/CardSession";
import Shop from "containers/pages/Shop";
import CartIndex from "containers/pages/CartIndex";
import AboutUs from "containers/pages/AboutUs";

const RouteContent = () => {
  return (<>
    <div className="container-fluid" style={{ margin: '70px 0 0 0', padding: '0' }}>
      <Routes>

        <Route path="" element={<Protected>
          <Main />
        </Protected>} />
        <Route path="/about us" element={<AboutUs />} />

        <Route path="/card" element={<CardSession />} />

        <Route path="/cart" element={<CartIndex />} />
        
        <Route path="/login" element={<Login />} />

        {/* <Route path="content" element={<Content />} /> */}

        <Route
          path="add"
          element={
            <Protected>
              <AddProduct />
            </Protected>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="/productList" element={<ProductList />} />
        <Route
          path="productList/productUpdate/:id"
          element={<UpdateProduct />}
        />
        <Route path="productList/product/show/:id" element={<ShowProduct />} />
        <Route path="search" element={<SearchProduct />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  </>);
}

export default RouteContent;