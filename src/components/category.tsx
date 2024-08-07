import React, { useContext, useState, useEffect } from "react";
import Form_gmail from "./form_gmail";
import ProductItemCategory from "./productIteamCategory";
import { ProductCT } from "../context/product";
import { IPCategory, IProduct } from "../interface/product";
import { Link, useParams } from "react-router-dom";

type Props = {
  Categorys: IPCategory[];
};

const Category = ({ Categorys }: Props) => {
  const { products, onUpdateData } = useContext(ProductCT);
  const {id} = useParams()
  useEffect(() => {
    if(id) onUpdateData(id)
  },[id])

  return (
    <>
      <div className="container">
        <div className="bg-gradient-to-r from-green-300 to-green-100 h-[100px]">
          <h1 className="text-[#505F4E] font-bold text-[30px] p-[30px]">
            Töpfe & Behälter
          </h1>
        </div>
        <div className="m-[20px] grid grid-cols-4 gap-2">
          {Categorys.map((category) => (
            <Link
            to={`/category/`+category.id}
              key={category.name}
              className={`w-[193px] h-[61.71px] p-[7px] bg-green-300 flex justify-between mr-[100px] rounded-md cursor-pointer`}

            >
              <img
                className="iteam w-[66.63px] h-[47.5px] rounded-md"
                src={category.image}
                alt={category.name}
              />
              <p className="text mt-[10px] mr-[20px]">{category.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-grow-2 gap-8 m-[80px] mb-[350px]">
          <div className="content_left grid grid-cols-3 gap-9 w-[1000px] bg-gradient-to-t from-white to-green-100">
            {products.map((product: IProduct) => (
              <ProductItemCategory key={product.id} product={product} />
            ))}
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
                <h3 className="text-lg font-semibold text-foreground">
                  Filter By Price
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground">
                    From $0 to $8000
                  </span>
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg">
                    Filter
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8000"
                  className="w-full mt-2"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Filter By Size
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground">2 mm by 50</span>
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg">
                    Filter
                  </button>
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

export default Category;
