import * as React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import PaperHeader from "../PaperHeader";
import ComboBox from "../ComboBox";
import {
  vitalSignRates,
  vitalSignSites,
  vitalSignCardiacRhythms,
  vitalSignRespRates,
  vitalSignOxySats,
  vitalSignGlucoses,
  vitalSignGlascowEyeOptions,
  vitalSignGlascowVerbalOptions,
  vitalSignGlascowMotorOptions,
  vitalSignSkinColorOptions,
  vitalSignSkinTempOptions,
  vitalSignSkinMoistureOptions,
  vitalSignTempSite,
  levelsOfConsciousness
} from "../listItems";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function VitalSign() {
  const [date, setDate] = React.useState<Date | null>();
  const [site, setSite] = React.useState<string>("");
  const [cardiacRhythm, setCardiacRhythm] = React.useState<string>("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={2} alignItems="center">
        <Grid item xs>
          <DateTimePicker
            renderInput={(props) => (
              <TextField {...props} size="small" fullWidth />
            )}
            label="Vitals Given At"
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setDate(new Date())}>
            Vitals Now
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
          <PaperHeader title="The Heart" />
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} sm={4}>
              <ComboBox label="Rate" options={vitalSignRates} type="number" />
            </Grid>
            <Grid container spacing={1} item xs={12} sm={8}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel id="site-select-label">Site</InputLabel>
                  <Select
                    labelId="site-select-label"
                    id="site-select"
                    value={site}
                    label="Site"
                    onChange={(event: SelectChangeEvent) => {
                      setSite(event.target.value as string);
                    }}
                  >
                    {vitalSignSites.map((item) => (
                      <MenuItem dense key={item} value={item.toLowerCase()}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {site === "other" && (
                <Grid item xs={12} sm={6}>
                  <TextField size="small" fullWidth label="Other" />
                </Grid>
              )}
            </Grid>
            <Grid container spacing={1} item xs={12}>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="cardiac-rhythm-select-label">
                    Cardiac Rhythm
                  </InputLabel>
                  <Select
                    labelId="cardiac-rhythm-select-label"
                    id="cardiac-rhythm-select"
                    value={cardiacRhythm}
                    label="Cardiac Rhythm"
                    onChange={(event: SelectChangeEvent) => {
                      setCardiacRhythm(event.target.value as string);
                    }}
                  >
                    {vitalSignCardiacRhythms.map((item) => (
                      <MenuItem dense key={item} value={item.toLowerCase()}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {cardiacRhythm === "other" && (
                <Grid item xs={12} sm={4}>
                  <TextField size="small" fullWidth label="Other" />
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2" gutterBottom>
                Blood Pressure
              </Typography>
              <Stack
                direction="row"
                spacing={{ xs: 1, md: 2 }}
                alignItems="center"
              >
                <TextField
                  type="number"
                  size="small"
                  label="Systolic"
                  fullWidth
                />
                <Typography fontWeight="bold">/</Typography>
                <TextField
                  type="number"
                  size="small"
                  label="Diastolic"
                  fullWidth
                />
                <Typography fontWeight="bold">mmHg</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={2}>
          <ComboBox
            label="Respiration Rate"
            options={vitalSignRespRates}
            type="number"
          />
          <ComboBox
            label="Oxygen Saturation"
            options={vitalSignOxySats}
            type="number"
          />
          <ComboBox label="Glucose" options={vitalSignGlucoses} type="number" />
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
          <PaperHeader title="Glascow Coma" />
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12}>
              <ComboBox label="Eye" options={vitalSignGlascowEyeOptions} />
            </Grid>
            <Grid item xs={12}>
              <ComboBox
                label="Verbal"
                options={vitalSignGlascowVerbalOptions}
              />
            </Grid>
            <Grid item xs={12}>
              <ComboBox label="Motor" options={vitalSignGlascowMotorOptions} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
          <PaperHeader title="Skin" />
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12}>
              <ComboBox label="Color" options={vitalSignSkinColorOptions} />
            </Grid>
            <Grid item xs={12}>
              <ComboBox
                label="Temperature"
                options={vitalSignSkinTempOptions}
              />
            </Grid>
            <Grid item xs={12}>
              <ComboBox
                label="Moisture"
                options={vitalSignSkinMoistureOptions}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
          <PaperHeader title="Temperature" />
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} container alignItems="center">
              <Grid item xs>
                <TextField
                  type="number"
                  size="small"
                  fullWidth
                  label="Degree"
                />
              </Grid>
              <Grid item>
                <TextField size="small" select defaultValue="C">
                  <MenuItem value="C">&deg;C</MenuItem>
                  <MenuItem value="F">&deg;F</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <ComboBox
                label="Site of Temperature"
                options={vitalSignTempSite}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ComboBox
          label="Levels of Conciousness"
          options={levelsOfConsciousness}
        />
      </Grid>
    </Grid>
  );
}
