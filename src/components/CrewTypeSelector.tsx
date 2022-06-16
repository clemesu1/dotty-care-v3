import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const crewTypes: string[] = [
  "EMT-1",
  "EMT-2",
  "EMT-3",
  "EMR",
  "PCP",
  "ACP",
  "CCP",
  "RT",
  "RN",
  "MD",
  "Student",
  "Other"
];

interface CrewTypeSelectorProps {
  label: string;
  name: string;
  value: string;
  otherValue: string;
  onChange: (name: string, value: any) => void;
}

export default function CrewTypeSelector({
  label,
  name,
  value,
  otherValue,
  onChange
}: CrewTypeSelectorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(name, event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {crewTypes.map((crewType) => (
            <MenuItem key={crewType} value={crewType.toLowerCase()}>
              {crewType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {value === "other" && (
        <TextField
          size="small"
          label="Other"
          value={otherValue}
          onChange={(event) => onChange(`${name}Oth`, event.target.value)}
          fullWidth
          margin="dense"
        />
      )}
    </Box>
  );
}
