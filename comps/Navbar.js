import Link from "next/link";
import Image from "next/image";
import { useClock } from "react-use-clock";
const Navbar = () => {
  const clock = useClock();
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
        <Link className="mr-4" href="/calendar/">
          Calendar
        </Link>
        <div className="mr-4">
          {" "}
          <strong>
            {clock.hours.toString().padStart(2, "0")}:
            {clock.minutes.toString().padStart(2, "0")}:
            {clock.seconds.toString().padStart(2, "0")}
          </strong>
          <div
            style={{
              "--hours": `${clock.hours}`,
              "--minutes": `${clock.minutes}`,
              "--seconds": `${clock.seconds}`,
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
