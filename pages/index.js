import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className="text-center text-[#333] pb-5">Homepage</h1>
        <p className="text-[#777]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p className="text-[#777]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <Link
          href="/ninjas/"
          className="w-48 rounded py-2 block px-0 my-8 mx-auto bg-[#4979ff] text-white text-center"
        >
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
