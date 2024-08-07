import React, { useEffect, useState } from 'react';
import { IProduct } from '../../interface/product';
import api from '../../config/axios';
import { useSearchParams } from 'react-router-dom';
import ProductItemCategory from '../productIteamCategory';
import Form_gmail from '../form_gmail';

const Search = () => {
  const [search] = useSearchParams();
  const [products, setProduct] = useState<IProduct[]>([]);
  const [keywords, setKeywords] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { data } = await api.get('products?name_like=' + search.get('keyword'));
      setProduct(data);
      setKeywords(search.get('keyword') as string);
    })();
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="bg-gradient-to-r from-green-300 to-green-100 h-[100px]">
          <h1 className="text-[#505F4E] font-bold text-[30px] p-[30px]">
            Töpfe & Behälter
          </h1>
        </div>
        <div className="m-[20px] flex justify-center">
          <div className="w-[193px] h-[61.71px] p-[7px] bg-green-300 flex justify-between mr-[100px] rounded-md">
            <img
              className="iteam w-[66.63px] h-[47.5px] rounded-md"
              src="src/upload/16.png"
              alt=""
            />
            <p className="text mt-[10px] mr-[20px]">sản phẩm</p>
          </div>
          <div className="w-[193px] h-[61.71px] p-[7px] bg-green-300 flex justify-between mr-[100px] rounded-md">
            <img
              className="iteam w-[66.63px] h-[47.5px] rounded-md"
              src="src/upload/17.png"
              alt=""
            />
            <p className="text mt-[10px] mr-[20px]">sản phẩm</p>
          </div>
          <div className="w-[193px] h-[61.71px] p-[7px] bg-green-300 flex justify-between mr-[100px] rounded-md">
            <img
              className="iteam w-[66.63px] h-[47.5px] rounded-md"
              src="src/upload/18.png"
              alt=""
            />
            <p className="text mt-[10px] mr-[20px]">sản phẩm</p>
          </div>
          <div className="w-[193px] h-[61.71px] p-[7px] bg-green-300 flex justify-between rounded-md">
            <img
              className="iteam w-[66.63px] h-[47.5px] rounded-md"
              src="src/upload/19.png"
              alt=""
            />
            <p className="text mt-[10px] mr-[20px]">sản phẩm</p>
          </div>
        </div>
        <h1 className="text-[24px] py-10 text-center">
          Kết Quả Tìm Kiếm Theo Từ Khóa: <strong className="text-red-500">{keywords}</strong>
        </h1>
        <div className="flex flex-grow-2 gap-8 m-[80px] mb-[350px]">
          <div className="content_left w-[1000px] grid grid-cols-3 gap-9 bg-gradient-to-t from-white to-green-100">
            {products.length > 0 ? (
              products.map((product: IProduct) => (
                <ProductItemCategory key={product.id} product={product} />
              ))
            ) : (
              <div className="text-center text-red-500 col-span-3 mt-[20px] text-[30px]">Không có sản phẩm nào</div>
            )}
          </div>
          <div className="content_right ml-[50px] h-[553px] w-[344px]">
            <div className="p-4 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground border-b-4 border-primary pb-1 text-[#505F4E]">
                  Kategorien
                </h2>
                <div className="mt-4 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-primary border-muted-foreground"
                    />
                    <span className="text-foreground">Eckige Töpfe</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-primary border-muted-foreground"
                    />
                    <span className="text-foreground">Runde Töpfe</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-primary border-muted-foreground"
                    />
                    <span className="text-foreground">Untersetzer</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-primary border-muted-foreground"
                    />
                    <span className="text-foreground">Pflanzschalen</span>
                  </label>
                </div>
              </div>

              <div className="relative">
                <img
                  src="src/upload/26.png"
                  alt="Grow your own favourite plant"
                  className="w-full rounded-lg h-[350px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                  <p className="text-lg font-semibold">
                    Grow your own favourite plant
                  </p>
                  <button className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                    Shop Now
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">Filter By Price</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground">From $0 to $8000</span>
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg">Filter</button>
                </div>
                <input type="range" min="0" max="8000" className="w-full mt-2" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">Filter By Size</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground">2 mm by 50</span>
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg">Filter</button>
                </div>
                <input type="range" min="2" max="50" className="w-full mt-2" />
              </div>
            </div>
          </div>
        </div>
        <Form_gmail />
      </div>
    </>
  );
};

export default Search;
