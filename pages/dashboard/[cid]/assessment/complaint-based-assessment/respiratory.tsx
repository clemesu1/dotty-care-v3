import * as React from "react";
import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";

import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import ComboBox from "../../../../../src/components/ComboBox";
import RadioGroupBox from "../../../../../src/components/RadioGroupBox";

import {
  breathSoundChecksI,
  breathSoundChecksII
} from "../../../../../src/components/listItems";

export default function Respiratory() {
  const [breathSoundChecksList, setBreathSoundChecksList] = React.useState<
    string[]
  >([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr: string[] = [...breathSoundChecksList];
    if (event.target.checked) arr.push(event.target.value);
    else arr.splice(arr.indexOf(event.target.value), 1);
    setBreathSoundChecksList(arr);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <Stack spacing={2}>
          <Paper sx={{ p: 2 }}>
            <FormControl>
              <FormLabel id="lod-radio-buttons-group-label">
                Level of Distress
              </FormLabel>
              <RadioGroup
                aria-labelledby="lod-radio-buttons-group-label"
                name="lod-radio-buttons-group"
                sx={{ flexDirection: { xs: "row", md: "column" } }}
              >
                <FormControlLabel
                  value="mild"
                  control={<Radio />}
                  label="Mild"
                />
                <FormControlLabel
                  value="moderate"
                  control={<Radio />}
                  label="Moderate"
                />
                <FormControlLabel
                  value="severe"
                  control={<Radio />}
                  label="Severe"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
          <ComboBox
            label="Coughing"
            options={[
              "No cough",
              "Productive (with phlegm)",
              "Non-productive (no phlegm)",
              "Not noted"
            ]}
            sx={{ display: { xs: "none", md: "flex" } }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Paper sx={{ p: 2 }}>
          <FormControl
            component="fieldset"
            variant="standard"
            sx={{ width: "100%" }}
          >
            <FormLabel id="brsc-group-label">Breath Sound Checks</FormLabel>
            <Stack
              direction={{ xs: "row", sm: "column", md: "row" }}
              justifyContent="space-evenly"
            >
              <RadioGroup
                aria-labelledby="brsc-group-label"
                name="brsc-group"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "column" }
                }}
              >
                <FormControlLabel
                  value="equal"
                  control={<Radio />}
                  label="Equal"
                />
                <FormControlLabel
                  value="clear"
                  control={<Radio />}
                  label="Clear"
                />
                <FormControlLabel
                  value="unequal"
                  control={<Radio />}
                  label="Unequal"
                />
                <FormControlLabel
                  value="noisy"
                  control={<Radio />}
                  label="Noisy"
                />
              </RadioGroup>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { md: "center" }
                }}
              >
                <FormGroup
                  sx={{
                    flexDirection: { xs: "column", sm: "row", md: "column" }
                  }}
                >
                  {breathSoundChecksII.map((item) => (
                    <FormControlLabel
                      key={item}
                      control={
                        <Checkbox
                          checked={breathSoundChecksList.includes(
                            item.toLowerCase()
                          )}
                          onChange={handleCheckboxChange}
                          value={item.toLowerCase()}
                        />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
                <FormGroup
                  sx={{
                    flexDirection: { xs: "column", sm: "row", md: "column" }
                  }}
                >
                  {breathSoundChecksI.map((item) => (
                    <FormControlLabel
                      key={item}
                      control={
                        <Checkbox
                          checked={breathSoundChecksList.includes(
                            item.toLowerCase()
                          )}
                          onChange={handleCheckboxChange}
                          value={item.toLowerCase()}
                        />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Stack>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item container direction="column" spacing={2} xs={12} lg={4}>
        <Grid item>
          <TextField
            size="small"
            fullWidth
            label="Pre-EMS Medication"
            multiline
            rows={3}
          />
        </Grid>
        <Grid item>
          <RadioGroupBox
            label="Response to Pre-EMS Medication"
            options={["Improved", "Unchanged", "Deteriorated"]}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
        <ComboBox
          label="Coughing"
          options={[
            "No cough",
            "Productive (with phlegm)",
            "Non-productive (no phlegm)",
            "Not noted"
          ]}
        />
      </Grid>
      <Grid item container spacing={2} xs={12} lg={10}>
        <Grid item xs={12} md={6} lg={4}>
          <RadioGroupBox label="Tobacco" options={["Yes", "No", "Unknown"]} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RadioGroupBox
            label="Allergen Exposure"
            options={["Yes", "No", "Unknown"]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RadioGroupBox
            label="Medication Administered"
            options={["Yes", "No", "Unknown"]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RadioGroupBox label="JVD" options={["Yes", "No", "Unknown"]} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RadioGroupBox
            label="Peripheral Edema"
            options={["Yes", "No", "Unknown"]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RadioGroupBox
            label="Accessory Muscle Use"
            options={["Yes", "No", "Unknown"]}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        lg={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { lg: "center" }
        }}
      >
        <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
          Pain Scale
        </Typography>
        <Slider
          aria-label="Pain Scale"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={10}
          marks
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical"
            },
            display: { xs: "none", lg: "flex" }
          }}
          orientation="vertical"
        />
        <Slider
          aria-label="Pain Scale"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={10}
          marks
          sx={{
            display: { xs: "flex", lg: "none" }
          }}
        />
      </Grid>
    </Grid>
  );
}

Respiratory.getLayout = getLayout;
