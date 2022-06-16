import { getLayout } from "../../../../../src/layouts/PatientHistoryLayout";

import TextField from "@mui/material/TextField";

export default function LastMeal() {
  return (
    <div>
      <TextField size="small" fullWidth label="Comments" multiline rows={6} />
    </div>
  );
}

LastMeal.getLayout = getLayout;
