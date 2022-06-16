import { getLayout } from "../../../../../../src/layouts/TraumaLayout";
import { traumaOptions } from "../../../../../../src/components/listItems";
import CheckboxList from "../../../../../../src/components/CheckboxList";
import Grid from "@mui/material/Grid";
export default function Back() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Thoratic" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Lumbar" options={traumaOptions} />
      </Grid>
    </Grid>
  );
}

Back.getLayout = getLayout;
