import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectTen({ label }: { label: string }) {
  const options = Array.from(Array(11).keys()).slice(1);

  const [state, setState] = React.useState("");

  const id = `${label.toLowerCase}-select`;

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={state}
        label={label}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem dense key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
