import "./App.css";
import { useNavigate, useRoutes } from "react-router-dom";
import Home from "./components/home";
import Productlist from "./components/productlist";
import Client from "./layout/client";
import ProductContext from "./context/product";
import Addproduct from "./components/addProduct";
import Editproduct from "./components/editProduct";
import Category from "./components/category";
import Admin from "./layout/Admin";
import HomeAdmin from "./components/admin/homeadmin";
import { useEffect, useState } from "react";
import { FormDataCategory, IPCategory } from "./interface/product";
import { addCategory, getAllCategories, deleteCategory as deleteCategoryService } from "./services/category";
import CategoryList from "./components/category/listCategorys";
import AddCategory from "./components/category/addCategory";
import ProductsDetail from "./components/detail";
import Search from "./components/search/search";
import Register from "./components/register";
import Login from "./components/login";
import PrivateRouter from "./components/privateRouter/privateRouter";
import AccessDenied from "./components/privateRouter/accessDenied";
import Logout from "./components/logout";
import Auth from "./layout/auth";

function App() {
  const [categorys, setCategory] = useState<IPCategory[]>([]);
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      setCategory(data);
    })();
  }, []);

  const deleteCategory = async (id: string | number) => {
    if (confirm("ban chac chan muon xoa?")) {
      try {
        const data = await deleteCategoryService(id);
        alert("xoa thanh cong");
        const newCategorys = categorys.filter((category) => category.id !== id);
        setCategory(newCategorys);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onAddCategory = async (data: FormDataCategory) => {
    try {
      const category = await addCategory(data);
      alert("them thanh cong");
      setCategory([...categorys, category]);
      Navigate("dashboard/category_list");
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRoutes([
    {
      path: "",
      element: (
          <ProductContext>
              <Client />
          </ProductContext>
      ),
      children: [
        { path: "", element: <Home Categorys={categorys}/> },
        { path: "search", element: <Search /> },
        { path: "category", element: <Category Categorys={categorys}/> },
        { path: "category/:id", element: <Category Categorys={categorys}/> },
        {path: "/detail/:id", element: <ProductsDetail /> },
        
      ],
    },
    {
      path: "",
      element: <Auth/>,
      children:[
        {path: "register", Component: Register },
        { path: "login", Component: Login },
        { path: "logout", Component: Logout },
      ]
    },

    {
      path: "dashboard",
      element: (
        <PrivateRouter>
          <ProductContext>
              <Admin />
          </ProductContext>
        </PrivateRouter>
      ),
      children: [
        { path: '', element: <HomeAdmin /> },
        { path: "list", element: <Productlist /> },
        { path: "list/add", element: <Addproduct Categorys={categorys} /> },
        { path: "list/edit/:id", element: <Editproduct Categorys={categorys}/> },
        {path: 'category_list', element: <CategoryList categorys={categorys} deleteCategory={deleteCategory}/>},
        {path: 'category_list/add-category', element: <AddCategory onAdd={onAddCategory}/>}
      ],
    },
  ]);

  return router;
}

export default App;
