import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const Calender = () => {
  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      <div className="py-5">
        <Datepicker
          value={value}
          onChange={handleValueChange}
          showShortcuts={true}
        />
      </div>

      



    </div>
  );
};

export default Calender;
