import Head from "next/head";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { TimePicker } from "react-ios-time-picker";
import Timeit from "react-timeit";

const Calender = () => {
  const [time, setTime] = useState("10:00 AM");

  const onChange = (timeValue) => {
    setTime(timeValue);
  };

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
      <div className="flex justify-center py-9">
        <TimePicker onChange={onChange} time={value} use12Hours />
      </div>

      <Datepicker
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
      />
    </div>
  );
};

export default Calender;
