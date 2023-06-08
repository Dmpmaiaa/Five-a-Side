import {
    DateTimePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default function Datepicker({ updateDate }) {
    return (
        <div className="flex justify-center m-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    value={"value"}
                    onChange={(e) => updateDate(e)}
                    views={["day", "hours"]}
                    sx={{
                        "& .MuiInputBase-root": {
                            color: "white",
                            fontFamily: "Roboto-thin",
                            fontSize: "14px",
                            overflowX: "none",
                        },
                        "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                            {
                                borderColor: "#0C8CE9",
                            },

                    }}
                />
            </LocalizationProvider>
        </div>
    );
}
