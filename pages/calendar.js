import Head from "next/head";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const Calender = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>Ninja List | Calender</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <Datepicker value={value} onChange={handleValueChange} />
      </div>
    </>
  );
};

export default Calender;
