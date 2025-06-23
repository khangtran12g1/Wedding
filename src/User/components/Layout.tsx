import Header from "./Header";
import Footer from "./Footer";
import ToolLeft from "./ToolLeft";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">{children}</main>
      <ToolLeft/>
      <Footer />
    </div>
  );
}

export default Layout;
