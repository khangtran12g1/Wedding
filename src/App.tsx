import Layout from "./User/components/Layout";
import Home from "./User/pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Product from "./User/pages/Product";
import ProductDetail from "./User/pages/ProductDetail";
import ScrollToTop from "./User/components/ScrollToTop"; // hoặc đúng đường dẫn


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/product" element={< ProductDetail/>} />
          <Route path="/trangtrigt" element={< Product/>} />
          <Route path="/home" element={< Home/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
