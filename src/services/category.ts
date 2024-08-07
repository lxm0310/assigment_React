import api from '../config/axios';
import { FormDataCategory, IPCategory } from '../interface/product';

export const getAllCategories = async (): Promise<IPCategory[]> => {
    try {
        const { data } = await api.get('categorys');
        console.log(data);

        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh mục');
    }
};

export const getCategoryById = async (id: number | string): Promise<IPCategory> => {
    try {
        const { data } = await api.get(`categorys/${id}`);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh mục');
    }
};

export const addCategory = async (categoryData: FormDataCategory): Promise<IPCategory> => {
    try {
        const { data } = await api.post('categorys', categoryData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi thêm danh mục');
    }
};

export const updateCategory = async (categoryData: FormDataCategory, id: number | string): Promise<IPCategory> => {
    try {
        const { data } = await api.put(`categorys/${id}`, categoryData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật danh mục');
    }
};

export const deleteCategory = async (id: number | string): Promise<void> => {
    try {
        await api.delete(`categorys/${id}`);
    } catch (error) {
        throw new Error('Lỗi khi xóa danh mục');
    }
};
export const getCategoryBypr = async (id: number | string) => {
    try {
        const { data } = await api.get(`products?category=${id}`)
        return data
    } catch (error) {
        throw new Error('Lỗi')
    }
}
