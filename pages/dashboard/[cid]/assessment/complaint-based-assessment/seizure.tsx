import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";

import RadioGroupBox from "../../../../../src/components/RadioGroupBox";
import ComboBox from "../../../../../src/components/ComboBox";
import NumberIncrementer from "../../../../../src/components/NumberIncrementer";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Seizure() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <RadioGroupBox label="Witnessed seizure" options={["Yes", "No"]} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <ComboBox
            label="Suspected Cause of Seizure"
            options={[
              "Diabetes",
              "Epilepsy",
              "Fever",
              "Over Dose",
              "Trauma",
              "Other"
            ]}
          />
          <TextField size="small" fullWidth label="Other" />
        </Stack>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox
            label="Witness of Seizure"
            options={[
              "Family / Friend",
              "Bystander",
              "Fire service personnel",
              "Law enforcement personnel",
              "Other first responder",
              "Ambulance Crew",
              "Other"
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" fullWidth label="Other" />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox
            label="Type of Seizure"
            options={["Grand Mal", "Petit Mal", "Focal", "Jacksonian", "Other"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" fullWidth label="Other" />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <NumberIncrementer
          orientation="vertical"
          primary="Seizure Duration"
          secondary="min"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <NumberIncrementer
          orientation="vertical"
          primary="Number of Seizure(s)"
        />
      </Grid>
    </Grid>
  );
}

Seizure.getLayout = getLayout;
