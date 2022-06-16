import * as React from "react";
import { getLayout } from "../../../../../src/layouts/GeneralAssessmentLayout";

import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ComboBox from "../../../../../src/components/ComboBox";
import CustomListItemSelect from "../../../../../src/components/CustomListItemSelect";

import {
  levelsOfConsciousness,
  statuses
} from "../../../../../src/components/listItems";

export default function NeuroResponse() {
  const [statusList, setStatusList] = React.useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr: string[] = [...statusList];
    if (event.target.checked) arr.push(event.target.value);
    else arr.splice(arr.indexOf(event.target.value), 1);
    setStatusList(arr);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <CustomListItemSelect
          label="Level of Consciousness"
          options={levelsOfConsciousness}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Stack spacing={2}>
          <FormControl component="fieldset" variant="standard">
            <FormGroup row>
              {statuses.map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={statusList.includes(item.toLowerCase())}
                      onChange={handleCheckboxChange}
                      value={item.toLowerCase()}
                    />
                  }
                  label={item}
                />
              ))}
            </FormGroup>
          </FormControl>
          {statusList.includes("other") && (
            <TextField size="small" fullWidth label="Other" />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="subtitle2"
            component="h3"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Sensory
          </Typography>
          <Stack spacing={2}>
            <ComboBox label="Upper Right" options={["Absent", "Present"]} />
            <ComboBox label="Upper Left" options={["Absent", "Present"]} />
            <ComboBox label="Lower Right" options={["Absent", "Present"]} />
            <ComboBox label="Lower Right" options={["Absent", "Present"]} />
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4} sx={{ display: { lg: "none" } }}>
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="subtitle2"
            component="h3"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Motor
          </Typography>
          <Stack spacing={2}>
            <ComboBox
              label="Upper Right"
              options={["Normal", "Weak", "Absent"]}
            />
            <ComboBox
              label="Upper Left"
              options={["Normal", "Weak", "Absent"]}
            />
            <ComboBox
              label="Lower Right"
              options={["Normal", "Weak", "Absent"]}
            />
            <ComboBox
              label="Lower Left"
              options={["Normal", "Weak", "Absent"]}
            />
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="subtitle2"
            component="h3"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Left Eye
          </Typography>
          <Stack spacing={2}>
            <ComboBox
              label="Size"
              options={[
                "2 mm",
                "3 mm",
                "4 mm",
                "5 mm",
                "6 mm",
                "7 mm",
                "8 mm",
                "9 mm"
              ]}
            />
            <ComboBox
              label="Reactivity"
              options={["Yes", "No", "Abnormal", "Sluggish", "Not assessed"]}
            />
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="subtitle2"
            component="h3"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Right Eye
          </Typography>
          <Stack spacing={2}>
            <ComboBox
              label="Size"
              options={[
                "2 mm",
                "3 mm",
                "4 mm",
                "5 mm",
                "6 mm",
                "7 mm",
                "8 mm",
                "9 mm"
              ]}
            />
            <ComboBox
              label="Reactivity"
              options={["Yes", "No", "Abnormal", "Sluggish", "Not assessed"]}
            />
          </Stack>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="subtitle2"
            component="h3"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Motor
          </Typography>
          <Stack spacing={2}>
            <ComboBox
              label="Upper Right"
              options={["Normal", "Weak", "Absent"]}
            />
            <ComboBox
              label="Upper Left"
              options={["Normal", "Weak", "Absent"]}
            />
            <ComboBox
              label="Lower Right"
              options={["Normal", "Weak", "Absent"]}
            />
            <ComboBox
              label="Lower Left"
              options={["Normal", "Weak", "Absent"]}
            />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

NeuroResponse.getLayout = getLayout;
