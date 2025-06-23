import { useEffect, useState } from "react";
import sss from "../image/DSC04213.jpg";
import { Link } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const moTaGoi = {
  1: "Đầy đủ nghi lễ, đúng chuẩn phong tục ông bà",
  2: "Chỉn chu hơn, đẹp nổi bật và ấm cúng",
  3: "Phong cách trẻ, nhẹ nhàng mà vẫn giữ lễ nghĩa",
};

function TrangTriGt() {
    const [selected,setSelected] = useState(1);

    const handleSelect = (number : number) => {
    setSelected(number);
    
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
      }, []);
    
  };
  
  return (
    <>
    <div className=" hidden lg:flex flex-col font-timesnewroman gap-10 py-8 bg-[#edf8fb]">
            <h2 data-aos="fade-up" className="font-bold text-2xl font-timesnewroman text-center">TRANG TRÍ GIANG TIÊN</h2>
            <p data-aos="fade-up" className="text-center text-lg">Hiểu lần đầu là bỡ ngỡ, Cưới hỏi Phu Thê sẽ sát cánh cùng bạn làm nên lần đầu thật trọn vẹn</p>
            <div className=" grid-cols-2 grid px-24 gap-5 text-lg">
                <p data-aos="fade-left">Lễ dạm ngõ có rất nhiều tên gọi khác nhau tùy theo từng vùng miền như: lễ xem mặt, bỏ trà, đám nói (miền Nam) là một nghi lễ trong phong tục hôn nhân của người Việt.Trong buổi dạm ngõ nhà trai đến nhà gái đặt vấn đề chính thức cho đôi bạn trẻ qua lại với nhau và bàn bạc thêm về ngày tổ chức lễ ăn hỏi và lễ cưới.</p>
                <img data-aos="fade-right" src={sss} className="w-full"/>
            </div>
    </div>
      <h4 className="my-6 text-center text-xl font-bold text-red-500">
        Trang Trí Gia Tiên Đẹp Chuẩn Lễ – Sang Trọng, Tinh Tế Từng Góc Nhìn
      </h4>

      <div className="flex items-center justify-center gap-2 my-6">
        <button onClick={()=> handleSelect(1)} className={"rounded-full  px-4 py-2 text-sm font-bold " + (selected === 1 ? "bg-red-500 text-white" : "bg-white hover:text-black text-gray-400 border-gray-400 border")}>
          GÓI TRUYỀN THỐNG
        </button>
        <button onClick={()=> handleSelect(2)} className={"rounded-full  px-4 py-2 text-sm font-bold " + (selected === 2 ? "bg-red-500 text-white" : "bg-white hover:text-black text-gray-400 border-gray-400 border")}>
          GÓI SANG TRỌNG
        </button>
        <button onClick={()=> handleSelect(3)} className={"rounded-full  px-4 py-2 text-sm font-bold "  + (selected === 3 ? "bg-red-500 text-white" : "bg-white hover:text-black text-gray-400 border-gray-400 border")}>
          GÓI HIỆN ĐẠI
        </button>
      </div>

      <h2 className="text-center text-red-500 my-6 text-base"> {moTaGoi[selected as keyof typeof moTaGoi]}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24 mb-8">
        <div className="flex flex-col border-2 border-yellow-200 items-center pb-5 font-timesnewroman" >
            <Link to="/product" className="w-full aspect-square">
                <img src={sss}  className="object-cover w-full h-full"/>
            </Link>
            <p className="text-center mt-3">Trang Trí Gia Tiên Tông Trắng Vàng Tiffany – Sang Trọng, Đúng Nghi Lễ</p>
            <p className="text-center text-red-500 font-bold"> Giá: 5.200.000 đ</p>
            <div className="w-11/12 border-t border-blue-400 my-3"></div>
            <div className="w-full items-start px-3">
                <ul className="list-decimal list-inside space-y-1 text-gray-700"   >
                    <li className="relative ps-6"><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí cổng hoa lụa cao cấp</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn để mâm quả</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 bộ ấm tách trà</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 hoa lụa để bàn họ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-9/12 items-center px-7">
                <p className="text-red-600"> Tặng: 12 chai nước suối in tên </p>
                <p className="text-red-600"> Tặng: 10 bông cài áo </p>
                <p className="text-red-600"> Hỗ trợ: 2 đĩa 3 tần cao cấp </p>
            </div>

            <Link to="/product" className="flex border rounded-lg bg-red-600 p-2 justify-center items-center mt-3">
                <p className="text-white">Xem chi tiết mẫu</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>

        </div>
        <div className="flex flex-col border-2 border-yellow-200 items-center pb-5 font-timesnewroman">
            <Link to="/" className="w-full aspect-square">
                <img src={sss}  className="object-cover w-full h-full"/>
            </Link>
            <p className="text-center mt-3">Trang Trí Gia Tiên Tông Trắng Vàng Tiffany – Sang Trọng, Đúng Nghi Lễ</p>
            <p className="text-center text-red-500 font-bold"> Giá: 5.200.000 đ</p>
            <div className="w-11/12 border-t border-blue-400 my-3"></div>
            <div className="w-full items-start px-3">
                <ul className="list-decimal list-inside space-y-1 text-gray-700"   >
                    <li className="relative ps-6"><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí cổng hoa lụa cao cấp</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn để mâm quả</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 bộ ấm tách trà</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 hoa lụa để bàn họ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-9/12 items-center px-7">
                <p className="text-red-600"> Tặng: 12 chai nước suối in tên </p>
                <p className="text-red-600"> Tặng: 10 bông cài áo </p>
                <p className="text-red-600"> Hỗ trợ: 2 đĩa 3 tần cao cấp </p>
            </div>

            <Link to="/product" className="flex border rounded-lg bg-red-600 p-2 justify-center items-center mt-3">
                <p className="text-white">Xem chi tiết mẫu</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>

        </div>
        <div className="flex flex-col border-2 border-yellow-200 items-center pb-5 font-timesnewroman">
            <Link to="/" className="w-full aspect-square">
                <img src={sss}  className="object-cover w-full h-full"/>
            </Link>
            <p className="text-center mt-3">Trang Trí Gia Tiên Tông Trắng Vàng Tiffany – Sang Trọng, Đúng Nghi Lễ</p>
            <p className="text-center text-red-500 font-bold"> Giá: 5.200.000 đ</p>
            <div className="w-11/12 border-t border-blue-400 my-3"></div>
            <div className="w-full items-start px-3">
                <ul className="list-decimal list-inside space-y-1 text-gray-700"   >
                    <li className="relative ps-6"><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí cổng hoa lụa cao cấp</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn để mâm quả</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 bộ ấm tách trà</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 hoa lụa để bàn họ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-9/12 items-center px-7">
                <p className="text-red-600"> Tặng: 12 chai nước suối in tên </p>
                <p className="text-red-600"> Tặng: 10 bông cài áo </p>
                <p className="text-red-600"> Hỗ trợ: 2 đĩa 3 tần cao cấp </p>
            </div>

            <Link to="/product" className="flex border rounded-lg bg-red-600 p-2 justify-center items-center mt-3">
                <p className="text-white">Xem chi tiết mẫu</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>

        </div>
        <div className="flex flex-col border-2 border-yellow-200 items-center pb-5 font-timesnewroman" >
            <Link to="/product" className="w-full aspect-square">
                <img src={sss}  className="object-cover w-full h-full"/>
            </Link>
            <p className="text-center mt-3">Trang Trí Gia Tiên Tông Trắng Vàng Tiffany – Sang Trọng, Đúng Nghi Lễ</p>
            <p className="text-center text-red-500 font-bold"> Giá: 5.200.000 đ</p>
            <div className="w-11/12 border-t border-blue-400 my-3"></div>
            <div className="w-full items-start px-3">
                <ul className="list-decimal list-inside space-y-1 text-gray-700"   >
                    <li className="relative ps-6"><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí cổng hoa lụa cao cấp</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn để mâm quả</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 bộ ấm tách trà</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 hoa lụa để bàn họ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-9/12 items-center px-7">
                <p className="text-red-600"> Tặng: 12 chai nước suối in tên </p>
                <p className="text-red-600"> Tặng: 10 bông cài áo </p>
                <p className="text-red-600"> Hỗ trợ: 2 đĩa 3 tần cao cấp </p>
            </div>

            <Link to="/product" className="flex border rounded-lg bg-red-600 p-2 justify-center items-center mt-3">
                <p className="text-white">Xem chi tiết mẫu</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>

        </div>
        <div className="flex flex-col border-2 border-yellow-200 items-center pb-5 font-timesnewroman">
            <Link to="/" className="w-full aspect-square">
                <img src={sss}  className="object-cover w-full h-full"/>
            </Link>
            <p className="text-center mt-3">Trang Trí Gia Tiên Tông Trắng Vàng Tiffany – Sang Trọng, Đúng Nghi Lễ</p>
            <p className="text-center text-red-500 font-bold"> Giá: 5.200.000 đ</p>
            <div className="w-11/12 border-t border-blue-400 my-3"></div>
            <div className="w-full items-start px-3">
                <ul className="list-decimal list-inside space-y-1 text-gray-700"   >
                    <li className="relative ps-6"><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí cổng hoa lụa cao cấp</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn để mâm quả</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 bộ ấm tách trà</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 hoa lụa để bàn họ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-9/12 items-center px-7">
                <p className="text-red-600"> Tặng: 12 chai nước suối in tên </p>
                <p className="text-red-600"> Tặng: 10 bông cài áo </p>
                <p className="text-red-600"> Hỗ trợ: 2 đĩa 3 tần cao cấp </p>
            </div>

            <Link to="/product" className="flex border rounded-lg bg-red-600 p-2 justify-center items-center mt-3">
                <p className="text-white">Xem chi tiết mẫu</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>

        </div>
        <div className="flex flex-col border-2 border-yellow-200 items-center pb-5 font-timesnewroman">
            <Link to="/" className="w-full aspect-square">
                <img src={sss}  className="object-cover w-full h-full"/>
            </Link>
            <p className="text-center mt-3">Trang Trí Gia Tiên Tông Trắng Vàng Tiffany – Sang Trọng, Đúng Nghi Lễ</p>
            <p className="text-center text-red-500 font-bold"> Giá: 5.200.000 đ</p>
            <div className="w-11/12 border-t border-blue-400 my-3"></div>
            <div className="w-full items-start px-3">
                <ul className="list-decimal list-inside space-y-1 text-gray-700"   >
                    <li className="relative ps-6"><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí cổng hoa lụa cao cấp</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn để mâm quả</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 bộ ấm tách trà</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Trang trí 2 hoa lụa để bàn họ</li>
                    <li className="relative ps-6 "><FaCheckSquare className="absolute left-0 top-1 text-red-500 w-4 h-4" />Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-9/12 items-center px-7">
                <p className="text-red-600"> Tặng: 12 chai nước suối in tên </p>
                <p className="text-red-600"> Tặng: 10 bông cài áo </p>
                <p className="text-red-600"> Hỗ trợ: 2 đĩa 3 tần cao cấp </p>
            </div>

            <Link to="/product" className="flex border rounded-lg bg-red-600 p-2 justify-center items-center mt-3">
                <p className="text-white">Xem chi tiết mẫu</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>

        </div>
    </div>
        
    </>
  );
}
export default TrangTriGt;
