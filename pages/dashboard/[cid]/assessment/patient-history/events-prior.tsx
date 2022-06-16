import { getLayout } from "../../../../../src/layouts/PatientHistoryLayout";

import TextField from "@mui/material/TextField";

export default function EventsPrior() {
  return (
    <div>
      <TextField size="small" fullWidth label="Comments" multiline rows={6} />
    </div>
  );
}

EventsPrior.getLayout = getLayout;
