import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormData, IPCategory } from '../interface/product';
import { ProductCT } from '../context/product';

type Props = {
  Categorys: IPCategory[];
};

const Addproduct = ({ Categorys }: Props) => {
  const { onAdd } = useContext(ProductCT);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onsubmit = (data: FormData) => {
    onAdd(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Thêm mới sản phẩm</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex gap-4 flex-col max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            {...register('name', { required: true, minLength: 6 })}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <span className="text-red-600 text-sm mt-1">Tên không để trống và lớn hơn 6 kí tự</span>}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Ảnh sản phẩm"
            {...register('image')}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Giá sản phẩm"
            {...register('price', {min:0 })}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && <span className="text-red-600 text-sm mt-1">Giá là số không âm</span>}
        </div>
        <div className="flex flex-col">
          <select {...register('category')}>
            {Categorys.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Thêm mới
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
