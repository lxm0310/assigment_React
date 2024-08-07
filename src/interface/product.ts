export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}
export interface IPCategory {
  id: number;
  name: string;
  image: string;
}
export type FormData = Pick<IProduct, 'name' | 'image' | 'price' | 'category'>
export type FormDataCategory = Pick<IPCategory, 'name' | 'image'>