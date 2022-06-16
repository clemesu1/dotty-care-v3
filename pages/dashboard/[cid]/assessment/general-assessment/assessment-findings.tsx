import * as React from "react";
import { getLayout } from "../../../../../src/layouts/GeneralAssessmentLayout";
import CheckboxList from "../../../../../src/components/CheckboxList";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  assessmentFindings,
  bodyAreas
} from "../../../../../src/components/listItems";

import Grid from "@mui/material/Grid";

export default function AssessmentFindings() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CheckboxList label="Assessment Finding" options={assessmentFindings} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CheckboxList label="Body Area Assessed" options={bodyAreas} />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label="Other"
          />
          {checked && <TextField size="small" fullWidth label="Other" />}
        </Stack>
      </Grid>
    </Grid>
  );
}

AssessmentFindings.getLayout = getLayout;
