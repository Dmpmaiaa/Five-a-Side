import { Input } from "@mui/material";
import { makeStyles } from "@mui/styled-engine";
import {
  DateField,
  DateTimePicker,
  LocalizationProvider
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { pt } from "date-fns/locale";


export default function Datepicker(props) {
  return (
    <div className="flex justify-center m-2">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={pt}>
        <DateTimePicker
          value={"value"}
          onChange={(newValue) =>
            setDates((preValue) => ({ ...preValue, newValue }))
          }
          views={["day", "month", "hours"]}
        
        />
      </LocalizationProvider>
    </div>
  );
}
