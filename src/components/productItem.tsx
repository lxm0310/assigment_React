import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    product:IProduct
}
const ProductItem = ({product}: Props) => {
  return (
    <div className="mt-[40px] h-[340px] ml-8 w-[231.44px] bg-white">
      <img
        src={product.image}
        className="img w-[235px] h-[230px] bg-white ml-[35px] mt-[20px]"
      ></img>
      <div className="tt flex justify-between m-[20px] mr-[50px]">
        <Link to={'/detail/'+product.id}>
        <div className="name text-[#665345]">{product.name}</div>
        </Link>
        <div className="price text-red-600">{product.price}</div>
      </div>
    </div>
  )
}
export default ProductItem