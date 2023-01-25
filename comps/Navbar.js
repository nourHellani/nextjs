import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="mt-2.5 mx-auto mb-20 py-2.5 px-0 flex justify-end items-end border-b border-borderb">
      <div className="mr-auto">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
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
  );
};

export default Navbar;
