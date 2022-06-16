import { getLayout } from "../../../../../../src/layouts/TraumaLayout";
import { traumaOptions } from "../../../../../../src/components/listItems";
import CheckboxList from "../../../../../../src/components/CheckboxList";
import Grid from "@mui/material/Grid";
export default function Abdomen() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Left Upper Quadrant" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Left Lower Quadrant" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Right Upper Quadrant" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Right Lower Quadrant" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxList label="Umbilicus" options={traumaOptions} />
      </Grid>
    </Grid>
  );
}

Abdomen.getLayout = getLayout;
