import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";
import { arrestWitnesses } from "../../../../../src/components/listItems";
import ComboBox from "../../../../../src/components/ComboBox";
import RadioGroupBox from "../../../../../src/components/RadioGroupBox";
import NumberIncrementer from "../../../../../src/components/NumberIncrementer";
import TimeSetter from "../../../../src/../components/TimeSetter";
import ComboBoxOther from "../../../../src/../components/ComboBoxOther";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CardiacArrest() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={2}>
          <ComboBox
            label="Arrest Classification"
            options={["Cardiac", "Non-cardiac", "Unknown"]}
          />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <RadioGroupBox
              label="Defibrillation prior to ambulance arrival"
              options={["Yes", "No"]}
              row
            />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={2}>
          <ComboBox label="Witness of Arrest" options={arrestWitnesses} />
          <TextField size="small" fullWidth label="Other" />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <NumberIncrementer primary="No. of Defibrillator Prior EMS" />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" } }}>
        <RadioGroupBox
          label="Defibrillation prior to ambulance arrival"
          options={["Yes", "No"]}
          row
        />
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" } }}>
        <NumberIncrementer primary="No. of Defibrillator Prior EMS" />
      </Grid>
      <Grid item container xs={12} spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <TimeSetter buttonText="Spont. Circulation" />
            <TimeSetter buttonText="Spont. Respiration" />
            <TimeSetter buttonText="Time of First CPR" />
            <TimeSetter buttonText="Time of Crew CPR" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <TimeSetter buttonText="Time of First Defibrillation" />
            <TimeSetter buttonText="Time of CPR Discontinued" />
            <TimeSetter buttonText="Pulse Rate at Destination" />
          </Stack>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther
          label="Type of Ambulance Defibrillator"
          options={[
            "Unknown",
            "Monophasic",
            "Biphasic",
            "Manual",
            "Automated",
            "Semi-automated",
            "Other"
          ]}
        />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther
          label="Reason CPR Discontinued in the Field"
          options={[
            "Protocol",
            "Order via online medical control",
            "Unsafe scene",
            "DNR",
            "Other"
          ]}
        />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther
          label="Reason for not initiating CPR"
          options={[
            "Obivious death protocol criteria met",
            "valid 'Do Not Resuscitate' order",
            "Delayed resuscitation access to a patient with confirmed vital signs absent",
            "Other"
          ]}
        />
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <ComboBoxOther
          label="Pacemaker/Implant Defibrillator"
          options={[
            "No",
            "Unknown",
            "Pacemaker",
            "Implanted Defibrillator",
            "Other"
          ]}
        />
      </Grid>
    </Grid>
  );
}

CardiacArrest.getLayout = getLayout;
