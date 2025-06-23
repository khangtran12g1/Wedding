import Layout from "./User/components/Layout";
import Home from "./User/pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Product from "./User/pages/Product";
import ProductDetail from "./User/pages/ProductDetail";
import Introduce from "./User/pages/introduce";
import ScrollToTop from "./User/components/ScrollToTop"; // hoặc đúng đường dẫn
import LienHe from "./User/pages/LienHe";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/ChiTietSanPham" element={< ProductDetail/>} />
          <Route path="/DanhSachSanPham" element={< Product/>} />
          <Route path="/GioiThieu" element={< Introduce/>} />
          <Route path="/home" element={< Home/>} />
          <Route path="/lien-he" element={<LienHe />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
