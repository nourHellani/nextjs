import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const Calender = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
      />
    </div>
  );
};

export default Calender;
