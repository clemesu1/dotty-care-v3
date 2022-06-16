import { getLayout } from "../../../../../../src/layouts/TraumaLayout";
import { traumaOptions } from "../../../../../../src/components/listItems";
import CheckboxList from "../../../../../../src/components/CheckboxList";
import Grid from "@mui/material/Grid";
export default function UpperExtremities() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Left Arm" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Right Arm" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Left Hand" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Right Hand" options={traumaOptions} />
      </Grid>
    </Grid>
  );
}

UpperExtremities.getLayout = getLayout;
