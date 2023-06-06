import {DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function Datepicker(props) {
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker
      label="Horário"
      value={"value"}
      closeOnSelect={true}
      className="bg-primaryDarkerBlue"
      onChange={(newValue) =>
        setDates((preValue) => ({ ...preValue, newValue }))
      }
      views={["day", "month", "hours"]}
    />
  </LocalizationProvider>;
}
