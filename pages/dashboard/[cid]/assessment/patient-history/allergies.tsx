import { getLayout } from "../../../../../src/layouts/PatientHistoryLayout";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import CheckboxList from "../../../../../src/components/CheckboxList";

import {
  drugAllergies,
  environmentalAllergies
} from "../../../../../src/components/listItems";

export default function Allergies() {
  return (
    <Box>
      <Typography variant="body1" fontWeight="bold" component="h3" gutterBottom>
        Allergies (select all that are applicable)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CheckboxList label="Drugs" options={drugAllergies} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckboxList
            label="Environmental"
            options={environmentalAllergies}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField size="small" fullWidth label="Others" multiline rows={4} />
        </Grid>
      </Grid>
    </Box>
  );
}

Allergies.getLayout = getLayout;
