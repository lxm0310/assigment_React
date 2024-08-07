import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {FormData, IPCategory} from '../interface/product'
import { useParams } from 'react-router-dom'
import { GetProductByID } from '../services/product'
import { ProductCT } from '../context/product'
type Props = {
  Categorys: IPCategory[];
};

const Editproduct = ({ Categorys }: Props) => {
    const {onUpdate} = useContext(ProductCT)
    const {register,handleSubmit,reset} = useForm<FormData>()
    const param = useParams()
    useEffect(()=>{
        (async ()=>{
            const product = await GetProductByID(param?.id as number|string)
            reset({
                name: product.name,
                image: product.image,
                price: product.price,
                category: product.category
            })
        })()
    },[])
    const onsubmit = (data:FormData)=>{
        onUpdate(data,param?.id as number|string)
    }
  return (
    <>
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Cập nhật sản phẩm</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex gap-4 flex-col max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col">
          <input 
            type="text" 
            placeholder="Tên sản phẩm" 
            {...register('name')} 
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            type="number" 
            placeholder="Giá sản phẩm" 
            {...register('price')} 
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex flex-col">
          <select {...register('category')}>
            {Categorys.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Cập nhật
        </button>
      </form>
    </div>
    </>
  )
}

export default Editproduct