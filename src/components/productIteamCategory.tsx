import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    product:IProduct
}
const ProductItemCategory = ({product}: Props) => {
  return (
    <>
    <div className="p-5 bg-white rounded-md ">
      <img
        className=" w-[200px] h-[200px] items-center "
        src={product.image}
        alt=""
      />
      <div>
        <Link to={'/detail/'+product.id} className="text-[#000000] font-bold">
        {product.name}
        </Link>
        <p className="text-red-600">{product.price}$</p>
      </div>
    </div>
    </>
  )
}
export default ProductItemCategory