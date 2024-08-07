import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'
import { ProductCT } from '../context/product'


const Productlist = () => {
  const {products,onDelete} = useContext(ProductCT)
  return (
    <>
      <div className="container mx-auto p-4">
      <Link
          to={'add'}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Add New Product
        </Link>
      <h1 className="text-3xl font-bold mb-6 text-center">Danh sách sản phẩm</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">STT</th>
              <th className="py-2 px-4 text-left">Ảnh SP</th>
              <th className="py-2 px-4 text-left">Tên SP</th>
              <th className="py-2 px-4 text-left">Giá tiền</th>
              <th className="py-2 px-4 text-left">Danh Mục</th>
              <th className="py-2 px-4 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product:IProduct,index:number) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  <img className="w-20 h-20 object-cover" src={product.image} alt={product.name} />
                </td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">
                  <Link to={`edit/${product.id}`} className="text-blue-500 hover:text-blue-700 mr-4">Sửa</Link>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Productlist