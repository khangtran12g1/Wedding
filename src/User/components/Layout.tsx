import Header from "./Header";
import Footer from "./Footer";
import ToolLeft from "./ToolLeft";
import {CartProvider,useCart }from "./CartContext";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <ToolLeft/>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default Layout;
