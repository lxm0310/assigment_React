import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetProductByID } from '../services/product';
import Form_gmail from './form_gmail';
import { IProduct } from '../interface/product';

const ProductsDetail = () => {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {  
        try {
          const data = await GetProductByID(id);
          setProduct(data);
        } catch (error) {
           console.log(error);
        }
    };
  }
    fetchProduct();
  },[])
  return (
    <>
      <div className="container">
        <div className="IFproduct flex justify-center p-[10px] items-center mt-[50px]">
          <img
            className="image_product w-[355px] h-[355px] mr-[90px]"
            src={product?.image}
            alt={product?.name}
          />
          <div className="Info">
            <h3 className="text-[14px] text-[#4E7C32] font-bold">{product?.category}</h3>
            <h1 className="text-[44px] font-bold">
              {product?.name}
            </h1>
            <p className="text-[16px] mb-[20px] text-[#68707D]">
            </p>
            <p className="text-[30px] font-bold">${product?.price}</p>
            <div className="flex space-x-4 mt-5">
              <div className="flex items-center bg-muted p-2 rounded-lg">
                <button className="text-muted-foreground px-2">-</button>
                <span className="px-4 text-foreground">1</span>
                <button className="text-muted-foreground px-2">+</button>
              </div>
              <button className="flex items-center bg-[#4E7C32] text-[white] w-[200px] pl-[40px] text-primary-foreground p-2 rounded-lg">
                <img
                  aria-hidden="true"
                  alt="shopping-cart"
                  src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
                  className="mr-2"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="description ml-[70px] mt-[80px]">
          <h1 className="text-[#4E7C32] text-[30px] mb-[10px]">Discription</h1>
          <p className="text-[#665345] text-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            <br /> type and scrambled i
          </p>
        </div>
        <div className="about ml-[70px] mt-[80px]">
          <h1 className="text-[#4E7C32] text-[30px] mb-[10px]">About</h1>
          <p className="text-[#665345] text-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            <br /> type and scrambled i
          </p>
        </div>
        <div className="p-4 ml-[50px] mt-[80px] mr-[20px]">
          <div className="flex items-start">
            <img
              src={product?.image}
              alt="product image"
              className="w-24 h-24 mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <div className="flex space-x-1 text-zinc-500">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <span className="text-green-600 text-2xl ml-2">5.0</span>
                <span className="text-zinc-500 ml-1">(388)</span>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Write reviews
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-1">
              <span className="text-sm">1⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-blue-500 h-2 w-[100%]"></div>
              </div>
              <span className="text-sm text-zinc-500">(388)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">2⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[80%]"></div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">3⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[60%]"></div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">4⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[40%]"></div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">5⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[20%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-4 grid grid-cols-2 gap-2">
            <div></div>
            <div className="border-t pt-4">
              <p className="text-green-600 font-bold">Aman gupta ⭐⭐⭐⭐⭐</p>
              <p className="text-zinc-700">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
            <div className="border-t pt-4">
              <p className="text-green-600 font-bold">Aman gupta ⭐⭐⭐⭐⭐</p>
              <p className="text-zinc-700">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
            <div className="border-t pt-4">
              <p className="text-green-600 font-bold">Aman gupta ⭐⭐⭐⭐⭐</p>
              <p className="text-zinc-700">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              See all
            </button>
          </div>
        </div>
        <Form_gmail />
      </div>
    </>
  );
};

export default ProductsDetail;
