import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export interface IUser {
  id?: number | string;
  name?: string;
  email?: string;
  password?: string;
}

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
  const navigate = useNavigate();

  const onSubmit = async (Rgdata: IUser) => {
    try {
      const { data } = await axios.post('http://localhost:3000/register', Rgdata);
      alert('Đăng ký thành công');
      navigate('/login');
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        console.log('Error response data:', error.response.data);
        alert('Đăng ký thất bại: ' + error.response.data.message);
      } else {
        alert('Đăng ký thất bại');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: true, minLength: 6 })}
            className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <span className='text-red-500 text-sm'>Name không được để trống phải lớn hơn 6 kí tự</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="text"
            {...register('email', { required: true, pattern: /^\S+@(\S+\.)+\S{2,6}$/ })}
            className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className='text-red-500 text-sm'>Email không đúng định dạng</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', { required: true, minLength: 6 })}
            className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <span className='text-red-500 text-sm'>Password phải lớn hơn 6 kí tự</span>}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Đăng Ký</button>
        <br />
        <Link to={'/login'}>Dang Nhap</Link>
      </form>
    </div>
  );
};

export default Register;
