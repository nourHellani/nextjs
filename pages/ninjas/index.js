import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  console.log(ninjas);

  return (
    <div>
      <h1>All Ninjas</h1>
      <div className="grid gap-4 grid-cols-4">
        {ninjas.map((ninja) => (
          <Link
            className=" px-2 py-4  mx-5 my-3 border border-l-3 border-l-white  hover:border-l-[#4979ff] bg-[#fff]"
            href={"/ninjas/" + ninja.id}
            key={ninja.id}
          >
            <h3>{ninja.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ninjas;
