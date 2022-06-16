import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function FormTextField({
  name,
  control,
  id,
  label,
  required,
  error,
  ...other
}: {
  name: string;
  control: any;
  id: string;
  label: string;
  error?: boolean;
  required?: boolean;
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          margin="normal"
          id={id}
          fullWidth
          label={label}
          error={error}
          helperText={error && `${label} is required`}
          required={required}
          {...other}
        />
      )}
    />
  );
}
