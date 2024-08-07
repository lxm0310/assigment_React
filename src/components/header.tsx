import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const onSubmit = (data: any) => {
    const { keywords } = data;
    navigate(`/search?keyword=${keywords}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="w-full h-[159px] bg-gradient-to-r from-green-950 to-green-800">
        <div className="item_top">
          <div className="flex items-center ml-[150px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center mr-[100px] mt-[22px]">
              <input
                {...register('keywords')}
                type="text"
                placeholder="Suchen Sie nach Produkten, Marken und mehr"
                className="w-[525px] h-[42.96px] p-2 rounded-l-lg border-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-white p-2 rounded-r-lg h-[42.96px]">
                <img
                  aria-hidden="true"
                  alt="search-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
                />
              </button>
            </form>
            <div className="flex items-center mr-[100px] text-[#ffff] mt-[20px]">
              <a
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white text-[16.56px] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                En
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-white mt-[20px]">
              <div className="relative">
                <div
                  className="flex items-center mr-[20px] cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <img
                    aria-hidden="true"
                    alt="account-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=👤"
                  />
                  <span>Account</span>
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <ul className="py-1 text-black">
                      {!isLoggedIn ? (
                        <>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={'register'}>Đăng Ký</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={'login'}>Đăng Nhập</Link>
                          </li>
                        </>
                      ) : (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <Link to={'logout'}>Logout</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative flex items-center">
                <img
                  aria-hidden="true"
                  alt="cart-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
                />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-white mt-[20px] w-[1125px] ml-[80px]" />
        <div className="menu mt-[20px] ml-[130px]">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link to={'category'} className="text-white">
                Category
              </Link>
            </li>
            <li className="mr-6">
              <Link to={'dashboard'} className="text-white">
                Admin
              </Link>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white">
                Erde & Substrate
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white">
                Töpfe & Behälte
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white">
                Bewässerung
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white">
                Pflanzen & Gärtnern
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white">
                Lüftung & Klimaanlage
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
