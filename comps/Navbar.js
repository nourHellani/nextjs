import Link from "next/link";
import Image from "next/image";
import { useClock } from "react-use-clock";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const clock = useClock();

  // time
  const cTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(cTime);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  useEffect(() => {
    const timeInterval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  // date
  const cDate = new Date().toLocaleDateString();
  const [date, setDate] = useState(cDate);

  const updateDate = () => {
    const newDate = new Date().toLocaleDateString();
    setDate(newDate);
  };

  useEffect(() => {
    const dateInterval = setInterval(updateDate, 1000);
    return () => {
      clearInterval(dateInterval);
    };
  }, [date]);

  // day

  const cDay = new Date().getDay();
  const [day, setDay] = useState(cDay);
  const weekDays = [
    "Sunday",
    "Monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const updateDay = () => {
    const newDay = new Date().getDay();
    setDay(newDay);
  };

  useEffect(() => {
    const dayInterval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(dayInterval);
    };
  }, [day]);

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
        {/* <div className="mr-4">
          {" "}
          <strong>
            {clock.hours.toString().padStart(2, "0")}:
            {clock.minutes.toString().padStart(2, "0")}:
            {clock.seconds.toString().padStart(2, "0")}
          </strong>
        </div> */}

        <div className="text-md mr-4">
          <p>{time}</p>
        </div>
        <div>
          <div className="text-sm text-red-600 uppercase text-center">
            <p>{weekDays[day]}</p>
          </div>
          <div className="text-md flex justify-end">
            <p>{date}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
