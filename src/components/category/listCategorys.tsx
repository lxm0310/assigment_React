import React from "react";
import { Link } from "react-router-dom";
import { IPCategory } from "../../interface/product";

type Props = {
  categorys: IPCategory[];
  deleteCategory: (id: number | string) => void;
};

const CategoryList = ({ categorys, deleteCategory }: Props) => {
  return (
    <>
      <h1 className="text-center text-[50px]">Danh sach san pham</h1>
      <Link
        className="mb-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        to={`add-category`}
      >
        Thêm Danh Mục
      </Link>
      <table className="mt-[20px] min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              stt
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              anh
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ten
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              thao tac
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categorys.map((category, index) => (
            <tr key={category.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  className="w-20 h-20 object-cover"
                  src={category.image}
                  alt={category.name}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {category.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default CategoryList;
