import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="mr-auto">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas/">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
