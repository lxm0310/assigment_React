import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct, FormData } from '../interface/product';
import { GetAllProducts, DeleteProduct, AddProduct, UpdateProduct } from '../services/product';
import { getCategoryBypr } from '../services/category';

type Props = {
  children: React.ReactNode;
};

export const ProductCT = createContext({} as any);

const ProductContext = ({ children }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await GetAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Set products to an empty array if there is an error
      }
    })();
  }, []);

  const onDelete = async (id: number | string) => {
    if (confirm('Bạn chắc chứ?')) {
      try {
        await DeleteProduct(id);
        alert('Xóa thành công');
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onAdd = async (data: FormData) => {
    try {
      const product = await AddProduct(data);
      alert('Thêm mới thành công');
      setProducts([...products, product]);
      navigate('list');
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdate = async (data: FormData, id: number | string) => {
    try {
      const resData = await UpdateProduct(data, id);
      alert('Cập nhật thành công');
      const newProducts = products.map((product) =>
        product.id === id ? resData : product
      );
      setProducts(newProducts);
      navigate('list');
    } catch (error) {
      console.error(error);
    }
  };
  const onUpdateData = async (id:number|string)=>{
    try {
        const resdata = await getCategoryBypr(id)
        console.log(resdata);
        
        setProducts(resdata)
    } catch (error) {
      
    }
  }

  return (
    <ProductCT.Provider value={{ products, onDelete, onAdd, onUpdate, onUpdateData }}>
      {children}
    </ProductCT.Provider>
  );
};

export default ProductContext;
