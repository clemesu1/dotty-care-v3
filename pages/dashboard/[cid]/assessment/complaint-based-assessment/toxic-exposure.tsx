import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";
import ComboBox from "../../../../src/../components/ComboBox";
import TimeSetter from "../../../../../src/components/TimeSetter";
import {
  units,
  substanceTypes,
  substanceNames,
  entryRoutes,
  reactionTypes,
  substanceEvidence
} from "../../../../../src/components/listItems";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

export default function ToxicExposure() {
  return (
    <Grid container spacing={2}>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} md={6}>
          <TextField size="small" label="Duration" fullWidth />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox
            label="Nature of Exposure"
            options={["Accidental", "Intentional (self-inflicted)", "Unknown"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TimeSetter buttonText="Time of Exposure" />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox label="Name of Substance" options={substanceNames} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="row" spacing={1}>
            <TextField type="number" size="small" label="Amount of Substance" />
            <TextField size="small" placeholder="oz" select defaultValue="">
              {units.map((option) => (
                <MenuItem dense key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox label="Type of Substance" options={substanceTypes} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" label="Other" fullWidth />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox label="Route of Entry" options={entryRoutes} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" label="Other" fullWidth />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox
            label="Type of Reaction to Substance"
            options={reactionTypes}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" label="Other" fullWidth />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} sm={6}>
          <ComboBox label="Evidence of Substance" options={substanceEvidence} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" label="Other" fullWidth />
        </Grid>
      </Grid>
    </Grid>
  );
}

ToxicExposure.getLayout = getLayout;
