import { getLayout } from "../../../../../../src/layouts/TraumaLayout";
import { traumaOptions } from "../../../../../../src/components/listItems";
import CheckboxList from "../../../../../../src/components/CheckboxList";
import Grid from "@mui/material/Grid";

export default function Head() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Face" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Mouth" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Right Ear" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Left Ear" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Nose" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Scalp" options={traumaOptions} />
      </Grid>
    </Grid>
  );
}

Head.getLayout = getLayout;
