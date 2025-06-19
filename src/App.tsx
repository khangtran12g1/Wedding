import Layout from "./User/components/Layout";
import Home from "./User/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrangTriGt from "./User/pages/Trang_Tri_GT";
import Product from "./User/pages/product";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={< Product/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
