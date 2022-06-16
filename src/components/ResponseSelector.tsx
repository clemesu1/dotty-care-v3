import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface ResponseSelectorProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: any) => void;
}

export default function ResponseSelector({
  label,
  name,
  value,
  onChange
}: ResponseSelectorProps) {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextResponse: string
  ) => {
    onChange(name, nextResponse);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Typography variant="subtitle2" sx={{ mr: 2 }}>
        {label}
      </Typography>
      <ToggleButtonGroup
        orientation="horizontal"
        value={value}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="cold" aria-label="cold" color="info">
          Cold
        </ToggleButton>
        <ToggleButton value="hot" aria-label="hot" color="error">
          Hot
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
