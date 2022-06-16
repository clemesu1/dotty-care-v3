import * as React from "react";

import { getLayout } from "../../../../src/layouts/CallDetailsLayout";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import {
  serviceTypes,
  destDeterminations,
  destLocationTypes,
  sceneFacilityCodes,
  facilityCodes,
  patientDispositions,
  factorsAffectingEMS
} from "../../../../src/components/listItems";

import ServiceCodeSelect from "../../../../src/components/ServiceCodeSelect";
import DispatchCodeMask from "../../../../src/components/DispatchCodeMask";

export default function IncidentDetails() {
  const [serviceType, setServiceType] = React.useState("");
  const [dispatchCode, setDispatchCode] = React.useState("");
  const [destDetn, setDestDetn] = React.useState("");
  const [ptDisp, setPtDisp] = React.useState("");
  const [factEMS, setFactEMS] = React.useState("");
  const [date, setDate] = React.useState<Date | null>(null);
  const [time, setTime] = React.useState<Date | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setServiceType(event.target.value as string);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <ServiceCodeSelect />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row", lg: "column" }}
            >
              <FormControl fullWidth size="small">
                <InputLabel id="service-type-select-label">
                  Service Type
                </InputLabel>
                <Select
                  labelId="service-type-select-label"
                  id="service-type-select"
                  value={serviceType}
                  label="Service Type"
                  onChange={handleChange}
                >
                  {serviceTypes.map((serviceType) => (
                    <MenuItem
                      key={serviceType}
                      value={serviceType.toLowerCase()}
                    >
                      {serviceType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Dispatch Code"
                size="small"
                name="dispatch-code"
                fullWidth
                placeholder="__-__-__"
                value={dispatchCode}
                onChange={(e) => setDispatchCode(e.target.value)}
                InputProps={{
                  inputComponent: DispatchCodeMask as any
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row", lg: "column" }}
            >
              <DatePicker
                label="Date of Incident"
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                }}
                renderInput={(params) => (
                  <TextField size="small" fullWidth {...params} />
                )}
              />
              <TimePicker
                label="Time of Incident"
                value={time}
                onChange={(newTime) => {
                  setTime(newTime);
                }}
                renderInput={(params) => (
                  <TextField size="small" fullWidth {...params} />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              mb: 1
            }}
          >
            <Typography variant="subtitle2" component="h3" gutterBottom>
              Incident Location
            </Typography>
            <Button size="small" color="inherit">
              Same as Patient Address
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField size="small" fullWidth label="Street" />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" fullWidth label="City" />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" fullWidth label="Province" />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" fullWidth label="Postal Code" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="inc-loc-select-label">
                Incident Location
              </InputLabel>
              <Select
                labelId="inc-loc-select-label"
                id="inc-loc-select"
                label="Incident Location"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel id="dest-detn-select-label">
                Destination Determination
              </InputLabel>
              <Select
                labelId="dest-detn-select-label"
                id="dest-detn-select"
                value={destDetn}
                label="Destination Determination"
                onChange={(e) => setDestDetn(e.target.value)}
              >
                {destDeterminations.map((item) => (
                  <MenuItem key={item} value={item.toLowerCase()}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel id="dest-loc-select-label">
                Destination Location Type
              </InputLabel>
              <Select
                labelId="dest-loc-select-label"
                id="dest-loc-select"
                label=" Destination Location Type"
              >
                {destLocationTypes.map((item) => (
                  <MenuItem key={item} value={item.toLowerCase()}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            {destDetn === "other" && (
              <TextField size="small" fullWidth label="Other" />
            )}

            <TextField size="small" fullWidth label="Geographic Locator" />
            <FormControl fullWidth size="small">
              <InputLabel id="sf-code-select-label">
                Scene Facility Code
              </InputLabel>
              <Select
                labelId="sf-code-select-label"
                id="sf-code-select"
                label="Scene Facility Code"
              >
                {sceneFacilityCodes.map((item) => (
                  <MenuItem key={item} value={item.toLowerCase()}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle2" component="h3" gutterBottom>
            Destination Location
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="dest-facility-select-label">
                  Facility Code
                </InputLabel>
                <Select
                  labelId="dest-facility-select-label"
                  id="dest-facility-select"
                  label="Facility Code"
                >
                  {facilityCodes.map((item) => (
                    <MenuItem key={item} value={item.toLowerCase()}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField size="small" fullWidth label="Street" />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" fullWidth label="City" />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" fullWidth label="Province" />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" fullWidth label="Postal Code" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="pt-contact-select-label">
              Patient Contact
            </InputLabel>
            <Select
              labelId="pt-contact-select-label"
              id="pt-contact-select"
              label="Patient Contact"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="pt-disp-select-label">
              Patient Disposition
            </InputLabel>
            <Select
              labelId="pt-disp-select-label"
              id="pt-disp-select"
              value={ptDisp}
              label="Patient Disposition"
              onChange={(e) => setPtDisp(e.target.value as string)}
            >
              {patientDispositions.map((item) => (
                <MenuItem key={item} value={item.toLowerCase()}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {ptDisp === "other" && (
          <Grid item xs={12} lg={4}>
            <TextField size="small" fullWidth label="Other" />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="fact-ems-select-label">
                Factors Affecting EMS
              </InputLabel>
              <Select
                labelId="fact-ems-select-label"
                id="fact-ems-select"
                value={factEMS}
                label="Factors Affecting EMS"
                onChange={(e) => setFactEMS(e.target.value as string)}
              >
                {factorsAffectingEMS.map((item) => (
                  <MenuItem key={item} value={item.toLowerCase()}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {factEMS === "other" && (
              <TextField size="small" fullWidth label="Other" />
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" component="h3" gutterBottom>
              Service Payment
            </Typography>
            <Stack spacing={2} direction={{ xs: "column", lg: "row" }}>
              <TextField size="small" fullWidth label="Responsibility" />
              <TextField size="small" fullWidth label="Number" />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

IncidentDetails.getLayout = getLayout;
