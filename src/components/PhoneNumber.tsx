import * as React from "react";
import TextField from "@mui/material/TextField";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const PhoneNumber = React.forwardRef<HTMLElement, CustomProps>(
  function PhoneInput(props, ref) {
    return (
      <TextField
        {...props}
        inputRef={ref}
        fullWidth
        size="small"
        label="Phone Number"
      />
    );
  }
);

export default PhoneNumber;
