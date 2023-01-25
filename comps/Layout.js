import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" font-Nunito container lg:max-w-screen-lg mx-auto px-5">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
