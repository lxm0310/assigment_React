import React, { useContext } from 'react'
import { IPCategory, IProduct } from '../interface/product'
import ProductItem from './productItem'
import { ProductCT } from '../context/product'
import Form_gmail from './form_gmail'

type Props = {
  Categorys: IPCategory[]
};
const Home = ({Categorys}:Props) => {
  const {products} = useContext(ProductCT)
  return (
    <div className="container bg-white">
        <div className="bg-gradient-to-r from-[#B5DCB0]  from-40% h-[470px] rounded-lg  flex flex-col md:flex-row items-center">
          <div className="ml-44  text-wrap">
            <h2 className="text-5xl text-left text-[#505F4E] font-bold text-primary">
              Wir kümmern uns um Ihre schöner Garten und Haus
            </h2>
            <p className="text-base w-[450px] text-left mt-4 text-[#505F4E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="mt-6 mr-[350px] w-[150px] rounded  bg-[#B5DCB0] border-4 border-[#505F4E] text-[#505F4E] hover:bg-secondary/80 py-2">
              Lern mehr
            </button>
          </div>
          <div className="w-screen ml-28">
            <img src="src/upload/bg1.png" alt="Plant in pot" className="" />
          </div>
        </div>
        <h2 className="mt-[80px] ml-[200px] text-xl text-[#505F4E] font-bold text-[40px]">
          Best Sellers
        </h2>
        <div className="bestSeller w-full h-full mt-[50px] bg-white">
          <div className="item grid grid-cols-4 gap-5">
            {products.map((product:IProduct)=>(
                <ProductItem product={product}/>
            ))}
          </div>
        </div>
        <div className="productItem_mid mt-[50px] w-[1034px] h-[565px] ml-[135px]">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <img
              className="row-span-3  border border-white w-[452px] h-[560px]"
              src="src/upload/5.png"
              alt=""
            />
            <div className="grid grid-cols-4 gap-2">
              <img
                className="border border-white col-span-2 w-[278px] h-[275px]"
                src="src/upload/6.png"
                alt=""
              />
              <img
                className="border border-white col-span-2 w-[278px] h-[275px]"
                src="src/upload/7.png"
                alt=""
              />
              <img
                className="border border-white col-span-2 w-[278px] h-[275px]"
                src="src/upload/8.png"
                alt=""
              />
              <img
                className="border border-white col-span-2 w-[278px] h-[275px]"
                src="src/upload/9.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="mt-[80px] ml-[200px] text-xl text-[#505F4E] font-bold text-[40px]">
          Kategorien
        </h2>
        <div className="category mt-[50px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {Categorys.map((category)=>(
            <div className="relative group h-[368px] w-[303px]">
              <img
                src={category.image}
                alt="Beleuchtung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p>30 items</p>
              </div>
            </div>
            ))}
            {/* <div className="relative group">
              <img
                src="src/upload/11.png"
                alt="Dünger"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Dünger</h3>
                <p>20 items</p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="src/upload/12.png"
                alt="Erde & Substrate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Erde & Substrate</h3>
                <p>20 items</p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="src/upload/13.png"
                alt="Bewässerung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Bewässerung</h3>
                <p>20 items</p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="src/upload/10.png"
                alt="Töpfe & Behälter"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Töpfe & Behälter</h3>
                <p>20 items</p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="src/upload/14.png"
                alt="Growbox"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Growbox</h3>
                <p>20 items</p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="src/upload/15.png"
                alt="Pflanzen & Gärtnern"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Pflanzen & Gärtnern</h3>
                <p>30 items</p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="src/upload/10.png"
                alt="Lüftung & Klimaanlage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
                <h3 className="text-lg font-semibold">Lüftung & Klimaanlage</h3>
                <p>20 items</p>
              </div>
            </div> */}
          </div>
        </div>
        <Form_gmail />
      </div>
  )
}

export default Home