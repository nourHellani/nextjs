import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen  ">
      <Navbar />
      <div className="  container max-w-4xl mx-auto my-5   ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
