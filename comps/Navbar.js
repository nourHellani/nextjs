import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav className="  container max-w-4xl mx-auto my-0 mt-2.5  mb-20 py-2.5 px-0 flex justify-end items-end ">
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
      <hr class="h-px my-8 bg-[#eaeaea] border-1  "></hr>
    </div>
  );
};

export default Navbar;
