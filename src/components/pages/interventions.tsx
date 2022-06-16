import * as React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import ComboBox from "../ComboBox";
import RadioGroupBox from "../RadioGroupBox";
import PaperHeader from "../PaperHeader";

import {
  procedureTypes,
  procedureDevices,
  dosageUnits,
  adminRoutes,
  treatmentTypes,
  treatmentOutcomes
} from "../listItems";

function TimeSetInput({ buttonText }: { buttonText: string }) {
  const [time, setTime] = React.useState<string>("");

  const handleTimeSet = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <Stack direction="row" spacing={{ xs: 1, md: 2 }}>
      <Button variant="contained" sx={{ width: "50%" }} onClick={handleTimeSet}>
        {buttonText}
      </Button>
      <TextField
        size="small"
        sx={{ width: "50%" }}
        value={time}
        onClick={handleTimeSet}
        InputProps={{
          readOnly: true
        }}
      />
    </Stack>
  );
}

const deviceListItems = (selectedItem: string): string[] => {
  switch (selectedItem) {
    case "airway cleared": {
      return procedureDevices[0];
    }
    case "airway patency": {
      return procedureDevices[1];
    }
    case "ventilation": {
      return procedureDevices[2];
    }
    case "iv initiation": {
      return procedureDevices[3];
    }
    case "spinal immobilization": {
      return procedureDevices[4];
    }
    case "extremity immobilization": {
      return procedureDevices[5];
    }
    case "bleeding control": {
      return procedureDevices[6];
    }
    default: {
      return [""];
    }
  }
};
const treatmentTypeListItems = (selectedItem: string): string[] => {
  switch (selectedItem) {
    case "medication": {
      return adminRoutes[0];
    }
    case "oxygen": {
      return adminRoutes[1];
    }
    case "iv fluid": {
      return adminRoutes[2];
    }
    default: {
      return [""];
    }
  }
};

function SelectBox({
  label,
  options,
  direction,
  value,
  onChange
}: {
  label: string;
  options: string[];
  direction?: "row" | "column";
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
}) {
  const row = direction === "row";
  const column = direction === "column";

  const [selected, setSelected] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  const id = label.toLowerCase().replace(/\s/g, "-");

  return (
    <Stack
      spacing={{ xs: 1, md: 2 }}
      direction={
        direction === "column" ? "column" : { xs: "column", md: "row" }
      }
    >
      <FormControl
        size="small"
        sx={[
          row && {
            width: { xs: "100%", lg: "50%" }
          },
          column && {
            width: "100%"
          }
        ]}
      >
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-select-label`}
          id={`${id}-select`}
          value={value ? value : selected}
          label={label}
          onChange={onChange ? onChange : handleChange}
        >
          {options.map((item) => (
            <MenuItem dense key={item} value={item.toLowerCase()}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {value === "other" ||
        (selected === "other" && (
          <TextField
            size="small"
            label="Other"
            sx={[
              row && {
                width: { xs: "100%", lg: "50%" }
              },
              column && {
                width: "100%"
              }
            ]}
          />
        ))}
    </Stack>
  );
}

function ProcedureSection() {
  const [procedureType, setProcedureType] = React.useState("");
  const handleProcedureTypeChange = (event: SelectChangeEvent) => {
    setProcedureType(event.target.value as string);
  };

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item xs={12} lg={8} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={{ xs: 1, md: 2 }}>
            <TimeSetInput buttonText="Start Time" />
            <TimeSetInput buttonText="End Time" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={{ xs: 1, md: 2 }}>
            <Stack
              spacing={{ xs: 1, md: 2 }}
              direction={
                procedureType === "other"
                  ? { xs: "column", md: "row" }
                  : "column"
              }
            >
              <FormControl
                size="small"
                sx={{
                  width:
                    procedureType === "other"
                      ? { xs: "100%", md: "50%", lg: "100%" }
                      : { xs: "100%" }
                }}
              >
                <InputLabel id="procedure-type-select-label">
                  Type of Procedure
                </InputLabel>
                <Select
                  labelId="procedure-type-select-label"
                  id="procedure-type-select"
                  value={procedureType}
                  label="Type of Procedure"
                  onChange={handleProcedureTypeChange}
                >
                  {procedureTypes.map((item) => (
                    <MenuItem dense key={item} value={item.toLowerCase()}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {procedureType === "other" && (
                <TextField
                  fullWidth
                  size="small"
                  label="Other"
                  sx={{
                    display: { lg: "none" },
                    width:
                      procedureType === "other" ? { md: "50%" } : { md: "100%" }
                  }}
                />
              )}
            </Stack>
            <ComboBox
              label="Device/Method"
              options={deviceListItems(procedureType)}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth size="small" label="Technician ID" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth size="small" label="Device Size" />
        </Grid>
        <Grid item xs={12} md={4}>
          <ComboBox
            label="Outcome"
            options={["Stable", "Improved", "Deteriorated"]}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4} container spacing={2}>
        {procedureType === "other" && (
          <Grid item xs={12} sx={{ display: { xs: "none", lg: "flex" } }}>
            <TextField fullWidth size="small" label="Other" />
          </Grid>
        )}
        <Grid item xs={12}>
          <RadioGroupBox label="Successful" options={["Yes", "No"]} row />
        </Grid>
      </Grid>
    </Grid>
  );
}

function TreatmentSection() {
  const [treatmentType, setTreatmentType] = React.useState("");

  const handleTreatmentTypeChange = (event: SelectChangeEvent) => {
    setTreatmentType(event.target.value as string);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <TextField fullWidth size="small" label="Technician ID" />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TimeSetInput buttonText="Total Time" />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack direction="row" spacing={1}>
          <TextField
            size="small"
            label="Dosage/Amount"
            sx={{ width: { xs: "50%", sm: "60%", md: "70%" } }}
          />
          <TextField
            size="small"
            placeholder="oz"
            select
            defaultValue=""
            sx={{ width: { xs: "50%", sm: "40%", md: "30%" } }}
          >
            {dosageUnits.map((option) => (
              <MenuItem dense key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <SelectBox
            label="Type of Treatment"
            options={treatmentTypes}
            direction="column"
            value={treatmentType}
            onChange={handleTreatmentTypeChange}
          />
          <ComboBox label="Treatment Outcome" options={treatmentOutcomes} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <SelectBox
            label="Administration Route"
            direction="column"
            options={treatmentTypeListItems(treatmentType)}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default function Interventions() {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
          <PaperHeader title="Procedure" />
          <ProcedureSection />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
          <PaperHeader title="Treatment" />
          <TreatmentSection />
        </Paper>
      </Grid>
    </Grid>
  );
}
