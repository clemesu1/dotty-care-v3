import { getLayout } from "../../../../src/layouts/CallDetailsLayout";

import { useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import PhoneNumber from "../../../../src/components/PhoneNumber";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { races } from "../../../../src/components/listItems";

export default function PatientDetails() {
  const [value, setValue] = useState<Date | null>(null);
  const [race, setRace] = useState("");
  const [phone, setPhone] = useState<any>();

  const handleRaceChange = (event: SelectChangeEvent) => {
    setRace(event.target.value as string);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField size="small" fullWidth label="Last Name" />
      </Grid>
      <Grid item xs={6}>
        <TextField size="small" fullWidth label="First Name" />
      </Grid>
      <Grid item xs={6} md={12}>
        <TextField size="small" fullWidth label="Street" />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField size="small" fullWidth label="City" />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField size="small" fullWidth label="Province" />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField size="small" fullWidth label="Postal Code" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField size="small" fullWidth label="Country" />
      </Grid>
      <Grid item xs={12} md={4}>
        <PhoneInput
          placeholder="Enter phone number"
          name="phone"
          defaultCountry="CA"
          value={phone}
          onChange={setPhone}
          inputComponent={PhoneNumber}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl fullWidth size="small">
          <InputLabel id="race-select-label">Race</InputLabel>
          <Select
            labelId="race-select-label"
            id="race-select"
            value={race}
            label="Race"
            onChange={handleRaceChange}
          >
            {races.map((race) => (
              <MenuItem key={race} value={race.toLowerCase()}>
                {race}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4}>
        <DatePicker
          label="Date of Birth"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField size="small" fullWidth {...params} />
          )}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField size="small" fullWidth label="Age" type="number" />
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper variant="outlined" sx={{ p: 1, pb: 0 }}>
          <FormControl size="small" fullWidth>
            <FormLabel id="gender-radio-group-label">
              <Typography variant="subtitle2">Gender</Typography>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-radio-group-label"
              name="gender-radio-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField size="small" fullWidth label="Medicare Number" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField size="small" fullWidth label="Medicare Origin" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField size="small" fullWidth label="Hospital Chart Number" />
      </Grid>
      <Grid item xs={12}>
        <TextField size="small" fullWidth multiline rows={4} label="Comments" />
      </Grid>
    </Grid>
  );
}

PatientDetails.getLayout = getLayout;
