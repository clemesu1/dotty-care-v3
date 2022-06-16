import * as React from "react";
import { getLayout } from "../../../../../src/layouts/GeneralAssessmentLayout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import CustomListItemSelect from "../../../../../src/components/CustomListItemSelect";

export default function ABCS() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <FormControl>
            <FormLabel id="airway-status-radio-buttons-group-label">
              Airway Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="airway-status-radio-buttons-group-label"
              name="airway-status-radio-buttons-group"
            >
              <FormControlLabel
                value="clear"
                control={<Radio />}
                label="Clear"
              />
              <FormControlLabel
                value="completely obstructed"
                control={<Radio />}
                label="Completely Obstructed"
              />
              <FormControlLabel
                value="partly obstructed"
                control={<Radio />}
                label="Partly Obstructed"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>

      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12}>
          <FormLabel>Breathing</FormLabel>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <FormControl>
              <FormLabel id="breathing-effort-radio-buttons-group-label">
                Effort
              </FormLabel>
              <RadioGroup
                aria-labelledby="breathing-effort-radio-buttons-group-label"
                name="breathing-effort-radio-buttons-group"
              >
                <FormControlLabel
                  value="effortless"
                  control={<Radio />}
                  label="Effortless"
                />
                <FormControlLabel
                  value="laboured"
                  control={<Radio />}
                  label="Laboured"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <FormControl>
              <FormLabel id="breathing-rate-radio-buttons-group-label">
                Rate
              </FormLabel>
              <RadioGroup
                aria-labelledby="breathing-rate-radio-buttons-group-label"
                name="breathing-rate-radio-buttons-group"
              >
                <FormControlLabel
                  value="fast"
                  control={<Radio />}
                  label="Fast"
                />
                <FormControlLabel
                  value="normal"
                  control={<Radio />}
                  label="Normal"
                />
                <FormControlLabel
                  value="slow"
                  control={<Radio />}
                  label="Slow"
                />
                <FormControlLabel
                  value="absent"
                  control={<Radio />}
                  label="Absent"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <FormControl>
              <FormLabel id="breathing-rhythm-radio-buttons-group-label">
                Rhythm
              </FormLabel>
              <RadioGroup
                aria-labelledby="breathing-rhythm-radio-buttons-group-label"
                name="breathing-rhythm-radio-buttons-group"
              >
                <FormControlLabel
                  value="regular"
                  control={<Radio />}
                  label="Regular"
                />
                <FormControlLabel
                  value="irregular"
                  control={<Radio />}
                  label="Irregular"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item xs={12}>
          <FormLabel>Circulation</FormLabel>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <FormControl>
              <FormLabel id="circulation-site-radio-buttons-group-label">
                Site
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="circulation-site-radio-buttons-group-label"
                name="circulation-site-radio-buttons-group"
              >
                <FormControlLabel
                  value="carotid"
                  control={<Radio />}
                  label="Carotid"
                />
                <FormControlLabel
                  value="radial"
                  control={<Radio />}
                  label="Radial"
                />
                <FormControlLabel
                  value="brachial"
                  control={<Radio />}
                  label="Brachial"
                />
                <FormControlLabel
                  value="femoral"
                  control={<Radio />}
                  label="Femoral"
                />
                <FormControlLabel
                  value="apical"
                  control={<Radio />}
                  label="Apical"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomListItemSelect
            label="Rate"
            options={["Rapid", "Normal", "Slow", "Absent"]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomListItemSelect
            label="Volume"
            options={["Weak", "Normal", "Bounding"]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomListItemSelect
            label="Rhythm"
            options={["Regular", "Irregular"]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

ABCS.getLayout = getLayout;
