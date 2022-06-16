import * as React from "react";

import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";
import NumberIncrementer from "../../../../../src/components/NumberIncrementer";
import RadioGroupBox from "../../../../../src/components/RadioGroupBox";
import ComboBox from "../../../../../src/components/ComboBox";
import ComboBoxOther from "../../../../../src/components/ComboBoxOther";
import {
  qualities,
  painSources,
  painRadiationSites,
  onsetStates,
  chestDefibs
} from "../../../../../src/components/listItems";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function ChestPain() {
  const [time, setTime] = React.useState<Date | null>(null);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <NumberIncrementer primary="Pain Severity" />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          size="small"
          fullWidth
          label="Name of the Pre-EMS Medication"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioGroupBox
          label="Self-Medication Administered"
          options={["Yes", "No"]}
          row
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ComboBox
          label="Response to Medication"
          options={[
            "No Change",
            "Signs and Symptoms Improved",
            "Signs and Symptoms Eliminated",
            "Deteriorated"
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TimePicker
          label="Onset"
          value={time}
          onChange={(newTime) => {
            setTime(newTime);
          }}
          renderInput={(params) => (
            <TextField size="small" fullWidth {...params} />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField size="small" fullWidth label="Provoked" />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther label="Quality" options={qualities} />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther label="Source of Pain" options={painSources} />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther
          label="Pain Radiation Site"
          options={painRadiationSites}
        />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther label="State at Onset" options={onsetStates} />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther
          label="Pacemaker/Implanted Defibrillator"
          options={chestDefibs}
        />
      </Grid>
    </Grid>
  );
}

ChestPain.getLayout = getLayout;
