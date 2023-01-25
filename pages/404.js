import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="text-center">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Going back to the{" "}
        <Link className="text-[#4979ff]  underline" href="/">
          Homepage
        </Link>{" "}
        is 3 seconds...
      </p>
    </div>
  );
};

export default NotFound;
