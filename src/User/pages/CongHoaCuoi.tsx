// File: src/pages/CongHoaCuoi.tsx
import React from "react";

function CongHoaCuoi() {
  return (
    <div className="px-4 md:px-20 py-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center uppercase">
        Cổng Hoa Cưới
      </h1>

      <p className="text-gray-700 text-lg mb-4 text-center max-w-2xl mx-auto">
        Công ty Phú Thê Wedding mang đến cho bạn những mẫu cổng hoa cưới sang trọng, tinh tế, giúc không gian lễ cưới trở nên lộng lẩy và ý nghĩa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="border rounded-lg shadow hover:shadow-lg overflow-hidden">
            <img
              src={`/image/conghoa${num}.jpg`} // Đồng bộ ảnh đặt trong public/image
              alt={`Cổng hoa ${num}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-pink-600 mb-2">
                Mẫu Cổng Hoa {num}
              </h2>
              <p className="text-sm text-gray-600">
                Thiết kế hiện đại, chất liệu cao cấp, phù hợp nhiều không gian và màu sắc.
              </p>
              <p className="text-red-500 font-semibold mt-2">Giá: 2.500.000đ</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CongHoaCuoi;
