import { useState } from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { alpha } from "@mui/material/styles";

export default function NumberIncremeter({
  primary,
  secondary,
  orientation,
  name,
  value,
  onChange
}: {
  primary: string;
  secondary?: string;
  orientation?: string;
  name: string;
  value: number;
  onChange: (name: string, value: any) => void;
}) {
  const handleIncrement = () => {
    onChange(name, value + 1);
  };

  const handleDecrement = () => {
    onChange(name, value > 0 ? value - 1 : value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="button" sx={{ mr: 2 }}>
        {primary}
      </Typography>
      {orientation !== null && orientation === "vertical" ? (
        <ButtonGroup size="small" orientation="vertical">
          <Button variant="outlined" onClick={handleIncrement}>
            +
          </Button>
          <Button
            variant="outlined"
            disableFocusRipple
            disableRipple
            sx={{
              borderBottom: "0px solid transparent",
              "&.MuiButtonBase-root:hover": {
                borderColor: (theme) => alpha(theme.palette.primary.main, 0.5),
                borderBottom: "0px solid transparent",
                bgcolor: "transparent"
              }
            }}
          >
            {value}
          </Button>
          <Button variant="outlined" onClick={handleDecrement}>
            &#8722;
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup size="small">
          <Button variant="outlined" onClick={handleDecrement}>
            &#8722;
          </Button>
          <Button
            variant="outlined"
            disableFocusRipple
            disableRipple
            sx={{
              borderRight: "0px solid transparent",
              "&.MuiButtonBase-root:hover": {
                borderColor: (theme) => alpha(theme.palette.primary.main, 0.5),
                borderRight: "0px solid transparent",
                bgcolor: "transparent"
              }
            }}
          >
            {value}
          </Button>
          <Button variant="outlined" onClick={handleIncrement}>
            +
          </Button>
        </ButtonGroup>
      )}

      {secondary && (
        <Typography variant="subtitle2" sx={{ ml: 2 }}>
          {secondary}
        </Typography>
      )}
    </Box>
  );
}
