import React from "react";
import { useForm } from "react-hook-form";
import { FormDataCategory } from "../../interface/product";
type Props = {
  onAdd: (data: FormDataCategory) => void;
};
const AddCategory = ({ onAdd }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataCategory>();
  const onSubmit = (data: FormDataCategory) => {
    onAdd(data);
  };
  return (
    <>
      <form
        className="max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          {...register('name',{ required: true, minLength: 6 })}
          placeholder="Tên Danh Mục"
        />
        {errors.name && <span className="text-red-600 text-sm mt-1">Bạn chưa điền tên danh mục</span>}
        <input
          className="mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          {...register("image")}
          placeholder="Ảnh Danh Mục"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Cập nhật sản phẩm
        </button>
      </form>
    </>
  );
};

export default AddCategory;
