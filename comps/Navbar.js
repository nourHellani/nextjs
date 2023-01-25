import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" border-b  border-solid border-[#eaeaea] ">
      <nav className="  container max-w-4xl mx-auto my-2 mt-1.5  mb-10 py-2.5 px-0 flex justify-end items-end ">
        <div className="mr-auto">
          <Image src="/logo.png" alt="site logo" width={100} height={49} />
        </div>
        <Link className="mr-4" href="/">
          Home
        </Link>
        <Link className="mr-4" href="/about">
          About
        </Link>
        <Link className="mr-4" href="/ninjas/">
          Ninja Listing
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
