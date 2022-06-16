import * as React from "react";
import { getLayout } from "../../../../../src/layouts/PatientHistoryLayout";
import { bodySystemCheckboxes } from "../../../../../src/components/listItems";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function General() {
  const [bodySystemList, setBodySystemList] = React.useState<string[]>([]);
  const [date, setDate] = React.useState<Date | null>(null);
  const [time, setTime] = React.useState<Date | null>(null);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr: string[] = [...bodySystemList];
    if (event.target.checked) arr.push(event.target.value);
    else arr.splice(arr.indexOf(event.target.value), 1);
    setBodySystemList(arr);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Body System</FormLabel>
            <FormGroup row>
              {bodySystemCheckboxes.map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={bodySystemList.includes(item.toLowerCase())}
                      onChange={handleCheckboxChange}
                      value={item.toLowerCase()}
                    />
                  }
                  label={item}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Date of Injury"
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
          renderInput={(params) => (
            <TextField size="small" fullWidth {...params} />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TimePicker
          label="Time of Injury"
          value={time}
          onChange={(newTime) => {
            setTime(newTime);
          }}
          renderInput={(params) => (
            <TextField size="small" fullWidth {...params} />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="other-simple-select-label">Co-Responders</InputLabel>
          <Select
            labelId="other-simple-select-label"
            id="other-simple-select"
            label="Co-Responders"
          >
            <MenuItem value="law enforcement">Law Enforcement</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            <MenuItem value="other first responders">
              Other First Responders
            </MenuItem>
            <MenuItem value="none">None</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="treatment-simple-select-label">
            Treatment Provided by Co-Responders
          </InputLabel>
          <Select
            labelId="treatment-simple-select-label"
            id="treatment-simple-select"
            label="Treatment Provided by Co-Responders"
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
            <MenuItem value="not applicable">Not Applicable</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="cond-simple-select-label">
            Patient Condition at Destination
          </InputLabel>
          <Select
            labelId="cond-simple-select-label"
            id="cond-simple-select"
            label="Patient Condition at Destination"
          >
            <MenuItem value="stable">Stable</MenuItem>
            <MenuItem value="improved">Improved</MenuItem>
            <MenuItem value="deteriorated">Deteriorated</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="disp-simple-select-label">
            Patient Displacement
          </InputLabel>
          <Select
            labelId="disp-simple-select-label"
            id="disp-simple-select"
            label="Patient Displacement"
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={10}>
        <FormControl fullWidth size="small">
          <InputLabel id="sus-simple-select-label">
            Suspected Intoxication
          </InputLabel>
          <Select
            labelId="sus-simple-select-label"
            id="sus-simple-select"
            label="Suspected Intoxication"
          >
            <MenuItem value="yes as reported by patient">
              Yes as reported by patient
            </MenuItem>
            <MenuItem value="yes as reported by bystander">
              Yes as reported by bystander
            </MenuItem>
            <MenuItem value="yes as suspected by provider">
              Yes as suspected by provider
            </MenuItem>
            <MenuItem value="not suspected">Not suspected</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="DNR Order" />
        </FormGroup>
      </Grid>
    </Grid>
  );
}

General.getLayout = getLayout;
