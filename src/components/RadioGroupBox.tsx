import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Paper from "@mui/material/Paper";

export default function RadioGroupBox({
  label,
  options,
  row
}: {
  label: string;
  options: string[];
  row?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s/g, "-");

  return (
    <Paper sx={{ p: { xs: 2, md: 2 }, width: "100%" }}>
      <FormControl>
        <FormLabel id={`${id}-radio-group-label`}>{label}</FormLabel>
        <RadioGroup
          row={row ? true : false}
          aria-labelledby={`${id}-radio-group-label`}
          name={`${id}-radio-group`}
        >
          {options.map((item) => (
            <FormControlLabel
              key={item}
              value={item.toLowerCase()}
              control={<Radio />}
              label={item}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
