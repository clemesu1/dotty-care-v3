import { getLayout } from "../../../../../../src/layouts/TraumaLayout";
import { traumaOptions } from "../../../../../../src/components/listItems";
import CheckboxList from "../../../../../../src/components/CheckboxList";
import Grid from "@mui/material/Grid";
export default function Chest() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Left" options={traumaOptions} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckboxList label="Right" options={traumaOptions} />
      </Grid>
    </Grid>
  );
}

Chest.getLayout = getLayout;
