import React from 'react';

const AccessDenied = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Cảnh Báo</h1>
        <p className="text-gray-700 mb-6">Bạn Không có quyền truy cập trang Admin</p>
        <button
          onClick={() => window.location.href = '/'} // Redirect to home or another appropriate page
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;
