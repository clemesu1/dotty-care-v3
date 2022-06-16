import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface TimeSetterProps {
  buttonText: string;
  name: string;
  value: string;
  onChange: (name: string, value: any) => void;
}

export default function TimeSetter({
  buttonText,
  name,
  value,
  onChange
}: TimeSetterProps) {
  const handleClick = () => {
    onChange(name, new Date().toLocaleTimeString());
  };

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" size="small" fullWidth onClick={handleClick}>
        {buttonText}
      </Button>
      <TextField
        fullWidth
        size="small"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onClick={handleClick}
      />
    </Stack>
  );
}
