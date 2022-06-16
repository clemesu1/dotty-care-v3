import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SxProps, Theme } from "@mui/material/styles";

export default function ComboBox({
  label,
  options,
  type,
  sx
}: {
  label: string;
  options: string[] | number[];
  type?: string;
  sx?: SxProps<Theme>;
}) {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  const id = label.toLowerCase().replace(/\s/g, "-");

  return (
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
          <MenuItem
            dense
            key={item}
            value={type === "number" ? item : item.toString().toLowerCase()}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
