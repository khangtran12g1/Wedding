import { Link } from "react-router-dom";
import logo from "../image/logo.jpg";
import { useState } from "react";

function Header() {
  const [productName, setProductName] = useState("");
  return (
    
    <header className=" flex flex-col shadow-lg mb-2 font-timesnewroman">
      <div className="flex flex-col md:flex-row items-center bg-white px-4 md:px-20 py-2 gap-2">
        <div className="w-1/2">
          <img src={logo} alt="Logo" className="w-56" />
        </div>

        <div>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex border-2 border-gray-300 px-3 rounded-lg items-center">
              <input
                type="text"
                style={{width:100}}
                value={productName}
                onChange={(values) => setProductName(values.target.value)}
                placeholder="Tìm kiếm"
                className="focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            </div>
            
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red-500 text-2xl"
              style={{ boxShadow: "0 0 8px 2px rgba(239, 68, 68, 0.6)" }}
            >
              📞
            </div>
            <div>
              <div className="text-xl text-gray-500">Hotline</div>
              <div className="text-xl font-semibold text-red-600">
                0967 784 511
              </div>
            </div>
          </div>

          <nav className="space-x-4">
            <Link to="/home" className="text-lg hover:text-pink-600 font-bold">
              Trang chủ
            </Link>
            <div className="group relative inline-block">
              <div className="flex cursor-pointer items-center gap-2 px-4 py-2 text-lg font-bold hover:text-pink-600">
                Sản Phẩm Và Dịch Vụ
                <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
              </div>
              <ul className="absolute left-0 top-full z-50 hidden whitespace-nowrap border bg-[#f1e256] shadow-md group-hover:block px-5">
                <li><Link to={"/DanhSachSanPham"} className="block px-4 py-2 hover:text-gray-100">Trang Trí Gia Tiên</Link><div className=" border-t border-white"></div></li>
                <li><Link to={"/DanhSachSanPham"} className="block px-4 py-2 hover:text-gray-100">Mâm Quả Trọn Gói</Link><div className=" border-t border-white"></div></li>
                <li><Link to={"/DanhSachSanPham"} className="block px-4 py-2 hover:text-gray-100">Lễ Vật Giạm Ngõ</Link><div className=" border-t border-white"></div></li>
                <li><Link to={"/DanhSachSanPham"} className="block px-4 py-2 hover:text-gray-100">Long Phụng-Trái Cây</Link><div className=" border-t border-white"></div></li>
                <li><Link to={"/DanhSachSanPham"} className="block px-4 py-2 hover:text-gray-100">Cổng Hoa Cưới</Link><div className=" border-t border-white"></div></li>
                <li><Link to={"/DanhSachSanPham"} className="block px-4 py-2 hover:text-gray-100">Lễ Tân-Bê Quả Cưới</Link><div className=" border-t border-white"></div></li>
              </ul>
            </div>
            <Link to="/GioiThieu" className="text-lg hover:text-pink-600 font-bold">
              Giới thiệu
            </Link>
            <Link to="/booking" className="text-lg hover:text-pink-600 font-bold">
              Thư viện ảnh
            </Link>
            <Link to="/lien-he" className="text-pink-600 font-bold"> 
  Liên hệ
</Link>
          </nav>
        </div>
      </div>
    
        <svg
          className="h-4 w-full"
          viewBox="0 0 100 5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 3 Q 1.25 0, 2.5 3 T 5 3 T 7.5 3 T 10 3 T 12.5 3 T 15 3 T 17.5 3 T 20 3 T 22.5 3 T 25 3 
                T 27.5 3 T 30 3 T 32.5 3 T 35 3 T 37.5 3 T 40 3 T 42.5 3 T 45 3 T 47.5 3 T 50 3 
                T 52.5 3 T 55 3 T 57.5 3 T 60 3 T 62.5 3 T 65 3 T 67.5 3 T 70 3 T 72.5 3 T 75 3 
                T 77.5 3 T 80 3 T 82.5 3 T 85 3 T 87.5 3 T 90 3 T 92.5 3 T 95 3 T 97.5 3 T 100 3"
            fill="none"
            stroke="red"
            strokeWidth="0.5"
          />
        </svg>
    </header>
  );
}
export default Header;
