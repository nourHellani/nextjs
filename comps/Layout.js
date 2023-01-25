import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="  mx-auto my-0    ">
      <Navbar />
      <div className="  container max-w-4xl mx-auto my-0   ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
