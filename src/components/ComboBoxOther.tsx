import * as React from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SxProps, Theme } from "@mui/material/styles";

export default function ComboBoxOther({
  label,
  options,
  sx
}: {
  label: string;
  options: string[];
  sx?: SxProps<Theme>;
}) {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  const id = label.toLowerCase().replace(/\s/g, "-");

  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl
          fullWidth
          size="small"
          sx={[...(Array.isArray(sx) ? sx : [sx])]}
        >
          <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
          <Select
            labelId={`${id}-select-label`}
            id={`${id}-select`}
            value={state}
            label={label}
            onChange={handleChange}
          >
            {options.map((item) => (
              <MenuItem dense key={item} value={item.toLowerCase()}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {state === "other" && (
        <Grid item xs={12} sm={6}>
          <TextField size="small" label="Other" fullWidth />
        </Grid>
      )}
    </>
  );
}
