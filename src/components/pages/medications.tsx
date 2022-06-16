import * as React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import ComboBox from "../ComboBox";
import {
  medicationList,
  medicationUnits,
  medicationRoutes,
  medicationPatientEffects
} from "../listItems";

export default function Medications() {
  const [date, setDate] = React.useState<Date | null>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={2} alignItems="center">
        <Grid item xs>
          <DateTimePicker
            renderInput={(props) => (
              <TextField {...props} size="small" fullWidth />
            )}
            label="Medication Given At"
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setDate(new Date())}>
            Medication Now
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <ComboBox label="Medication Given" options={medicationList} />
      </Grid>
      <Grid item xs={12} md={6} container spacing={2}>
        <Grid item xs={7} sm={8}>
          <TextField size="small" fullWidth label="Amount" />
        </Grid>
        <Grid item xs>
          <ComboBox label="Unit" options={medicationUnits} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ComboBox label="Route" options={medicationRoutes} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ComboBox
          label="Effect on Patient"
          options={medicationPatientEffects}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField label="Paramedic ID" size="small" fullWidth />
      </Grid>
    </Grid>
  );
}
