import { getLayout } from "../../../../../../src/layouts/TraumaLayout";
import { traumaOptions } from "../../../../../../src/components/listItems";
import CheckboxList from "../../../../../../src/components/CheckboxList";
import Grid from "@mui/material/Grid";
export default function LowerExtremities() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Left Leg" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Right Leg" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Left Foot" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Right Foot" options={traumaOptions} />
      </Grid>
    </Grid>
  );
}

LowerExtremities.getLayout = getLayout;
