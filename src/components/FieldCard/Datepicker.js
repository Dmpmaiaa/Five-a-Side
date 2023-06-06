import { Input } from "@mui/material";
import { makeStyles } from "@mui/styled-engine";
import {
  DateField,
  DateTimePicker,
  LocalizationProvider
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { pt } from "date-fns/locale";
import { useEffect, useState } from "react";


export default function Datepicker({updateDate}) {

  
  return (
    <div className="flex justify-center m-2">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt-br"}>
        <DateTimePicker
          value={"value"}
          onChange={(e) => updateDate(e)}
          views={["day", "month", "hours"]}
        
        />
      </LocalizationProvider>
    </div>
  );
}
