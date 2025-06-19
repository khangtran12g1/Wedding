import sss from "../image/DSC04213.jpg";
import cnhu from "../image/cnhu.jpg";
import atrieu from "../image/atrieu.jpg";
import xehoa from "../image/xehoa.jpg";
import bequa from "../image/bequa.jpg";
import bangan from "../image/bangan.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'


const images = [
  xehoa,
  sss,
  bequa,
  bangan,
  sss,xehoa
];

import { useState } from "react";
function Product() {
    const [phone, setPhone] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity((q) => q + 1);
    const decrease = () => setQuantity((q) => Math.max(1, q - 1));


  return (
    <>
      <div className="my-8 bg-white md:mx-24">
        <div className="flex gap-2 [&>h2]:text-gray-400 [&>h2]:text-lg mb-4 px-4" >
          <h2>Trang Chủ</h2>
          <h2>/</h2>
          <h2>Trang Trí Cưới Hỏi</h2>
        </div>
        <div className="md: grid grid-cols-1 md:grid-cols-2">

          <div className="px-4 md:sticky top-20 h-fit gap-4">
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                watchSlidesProgress={true} // QUAN TRỌNG
                modules={[Navigation, Thumbs]}
                className="mb-4"
            >
                {images.map((img, i) => (
                <SwiperSlide key={i}>
                    <div className="w-full aspect-[16/11]">
                        <img src={img} alt={`img-${i}`} className="w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            
                <div className="thumbs-swiper">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView="auto"
                        freeMode={true}
                        watchSlidesProgress={true}
                        slideToClickedSlide={true} 
                        modules={[FreeMode, Thumbs]}
                    >
                        {images.map((img, i) => (
                        <SwiperSlide key={i} className="!w-[100px]">
                            <img src={img} alt={`thumb-${i}`} className=" aspect-video object-cover" />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

          <div className="px-4 flex flex-col gap-4">
            <h2 className="text-3xl  font-medium">Trang Trí Gia Tiên Màu Trắng Xanh Mint Tiffany – Không Gian Cưới Tinh Tế, Đẳng Cấp</h2>
            <div className="flex text-2xl  font-medium">
                <h2 >Giá:&nbsp;</h2>
                <h2 className=" text-red-600">4.800.000 đ</h2>
            </div>
            <div className="flex flex-col [&>h2]:text-lg font-medium gap-3">
                <h2>CÁC TONE MÀU HIỆN CÓ:</h2>
                <div className="flex text-xs text-center">
                    <div className="flex flex-col border"style={{width:'10%'}}> 
                        <div className="bg-red-500 h-16" ></div>
                        <p className="text-xs">Màu Đỏ</p>
                    </div>
                    <div className="flex flex-col border"style={{width:'10%'}}> 
                        <div className="bg-blue-500 h-16" ></div>
                        <p>Màu xanh</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col [&>h2]:text-lg font-medium gap-3">
                <h2>DANH MỤC BAO GỒM:</h2>
                <ul className="list-decimal list-inside space-y-1 text-gray-700 text-lg font-timesnewroman">
                    <li>Trang trí cổng hoa lụa cao cấp</li>
                    <li>Trang trí phong màn voan + hoa lụa + chữ hỷ</li>
                    <li>Trang trí bàn thờ gia tiên + bộ lư đồng</li>
                    <li>Trang trí bàn để mâm quả</li>
                    <li>Trang trí bàn 2 họ + 12 ghế tiffany</li>
                    <li>Trang trí 2 bộ ấm tách trà</li>
                    <li>Trang trí 2 hoa lụa để bàn họ</li>
                    <li>Thiết kế bảng tên cô dâu và chú rể</li>
                </ul>
            </div>
            <div className="w-full border-gray-400 border-t"></div>
            <div className="flex flex-col [&>h2]:text-lg font-medium gap-3 ">
                <h2>HỖ TRỢ THÊM:</h2>
                <ul className="ist-inside space-y-1 text-gray-700 text-lg font-timesnewroman" >
                    <li><span className="text-red-500">Tặng:&nbsp;</span>12 chai nước suối in tên</li>
                    <li><span className="text-red-500">Tặng:&nbsp;</span>10 bông cài áo</li>
                    <li><span className="text-red-500">Tặng:&nbsp;</span>2 đĩa 3 tần cao cấp</li>
                </ul>
            </div>
            <div className="w-full border-gray-400 border-t"></div>
            <p className="text-lg font-timesnewroman">Hãy để Cưới Hỏi Phu Thê có cơ hội được phục vụ bạn</p>
            <div className="flex items-center gap-7">
                <img src={cnhu} className="w-16 h-auto"/>
                <div className="flex flex-col">
                    <p className="font-bold">C.Như</p>
                    <p className="flex items-center">
                        <a>📞0967784511</a>
                        &nbsp;-&nbsp;
                        <a target="_blank" href="" className="flex"><img className="w-6" src="https://phuthewedding.com/wp-content/uploads/2023/03/icon-zalo-circle2.png.pagespeed.ce_.iUc59tfITH.png"/>Zalo</a>
                        &nbsp;-&nbsp;
                        <a target="_blank" href="" className="flex"><img className="w-6" src="https://phuthewedding.com/wp-content/uploads/2023/03/icon-messenger.png.pagespeed.ce_.sSebhnGGgP.png"/>FaceBook</a>
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-7">
                <img src={atrieu} className="w-16 h-auto"/>
                <div className="flex flex-col">
                    <p className="font-bold">A.Triều</p>
                    <p className="flex items-center">
                        <a href="">📞0967784511</a>
                        &nbsp;-&nbsp;
                        <a target="_blank" href="" className="flex"><img className="w-6" src="https://phuthewedding.com/wp-content/uploads/2023/03/icon-zalo-circle2.png.pagespeed.ce_.iUc59tfITH.png"/>Zalo</a>
                        &nbsp;-&nbsp;
                        <a target="_blank" href="https://www.facebook.com/tran.an.khang.993446/?locale=vi_VN" className="flex"><img className="w-6" src="https://phuthewedding.com/wp-content/uploads/2023/03/icon-messenger.png.pagespeed.ce_.sSebhnGGgP.png"/>FaceBook</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-blue-400 md:w-2/3 gap-4 rounded-xl">
                <p className="text-white font-timesnewroman text-center text-lg">Yêu cầu Phuthewedding gọi lại</p>
                <div className="flex gap-3">
                    <input className="border rounded-lg text-base focus:outline-none p-2"
                        value={phone}
                        onChange={(values) => setPhone(values.target.value)}
                        placeholder="Số điện thoại cần tư vấn"
                        />
                    <button className="text-white hover:text-black">Gửi</button>
                </div>
            </div>
            <div className="flex ">
                <button
                    onClick={decrease}
                    className="w-10 h-10 rounded bg-gray-200 text-xl hover:bg-gray-300"
                >
                    –
                </button>

                <input
                    type="number"
                    value={quantity}
                    className="w-16 h-10 text-center border border-gray-300 rounded"
                />

                <button
                    onClick={increase}
                    className="w-10 h-10 rounded bg-gray-200 text-xl hover:bg-gray-300"
                >
                    +
                </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Product;
