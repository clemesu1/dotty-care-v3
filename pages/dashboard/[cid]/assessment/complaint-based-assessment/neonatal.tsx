import * as React from "react";
import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";
import TimeSetter from "../../../../../src/components/TimeSetter";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import {
  colourValues,
  hrValues,
  riValues,
  mtValues,
  reValues
} from "../../../../../src/components/listItems";

interface ValueProps {
  min1Colour: string | undefined;
  min5Colour: string | undefined;
  min1HR: string | undefined;
  min5HR: string | undefined;
  min1RI: string | undefined;
  min5RI: string | undefined;
  min1MT: string | undefined;
  min5MT: string | undefined;
  min1RE: string | undefined;
  min5RE: string | undefined;
}

const initialValues = {
  min1Colour: "",
  min5Colour: "",
  min1HR: "",
  min5HR: "",
  min1RI: "",
  min5RI: "",
  min1MT: "",
  min5MT: "",
  min1RE: "",
  min5RE: ""
};

function NumberSelect({
  label,
  options,
  name,
  value,
  handleChange
}: {
  label: string;
  options: string[];
  name: string;
  value: string | undefined;
  handleChange: (e: SelectChangeEvent) => void;
}) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-select-label`}
        id={`${name}-select`}
        value={value}
        name={name}
        label={label}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem dense key={item} value={options.indexOf(item)}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function NeonatalCalculator() {
  const [values, setValues] = React.useState<ValueProps>(initialValues);
  const [min1Result, setMin1Result] = React.useState<number>(0);
  const [min5Result, setMin5Result] = React.useState<number>(0);

  React.useEffect(() => {
    var min1Keys = Object.keys(values).filter((option) =>
      option.startsWith("min1")
    );
    const min1Values = min1Keys.map((key) => values[key as keyof ValueProps]);

    const filteredMin1Values = min1Values.filter((option) => {
      return option !== "";
    });

    const arr: number[] = filteredMin1Values.map((item) =>
      parseInt(item as string, 10)
    );

    const min1Result = arr.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    setMin1Result(min1Result);
  }, [values]);

  React.useEffect(() => {
    const min5Keys = Object.keys(values).filter((option) =>
      option.startsWith("min5")
    );
    const min5Values = min5Keys.map((key) => values[key as keyof ValueProps]);

    const filteredMin5Values = min5Values.filter((option) => {
      return option !== "";
    });

    const arr: number[] = filteredMin5Values.map((item) =>
      parseInt(item as string, 10)
    );

    const min5Result = arr.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    setMin5Result(min5Result);
  }, [values]);

  const handleChange = (e: SelectChangeEvent) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value as string
    });
  };

  return (
    <Grid item container spacing={2} xs={12}>
      <Grid item xs={12} md={6}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6">1 Minute</Typography>
          <NumberSelect
            label="Colour"
            name="min1Colour"
            options={colourValues}
            value={values.min1Colour}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Heart Rate"
            name="min1HR"
            options={hrValues}
            value={values.min1HR}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Reflex Irritability"
            name="min1RI"
            options={riValues}
            value={values.min1RI}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Muscle Tone"
            name="min1MT"
            options={mtValues}
            value={values.min1MT}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Respiratory Effort"
            name="min1RE"
            options={reValues}
            value={values.min1RE}
            handleChange={handleChange}
          />
          <TextField
            size="small"
            InputProps={{
              readOnly: true
            }}
            value={min1Result}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6">5 Minute</Typography>
          <NumberSelect
            label="Colour"
            name="min5Colour"
            options={colourValues}
            value={values.min5Colour}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Heart Rate"
            name="min5HR"
            options={hrValues}
            value={values.min5HR}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Reflex Irritability"
            name="min5RI"
            options={riValues}
            value={values.min5RI}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Muscle Tone"
            name="min5MT"
            options={mtValues}
            value={values.min5MT}
            handleChange={handleChange}
          />
          <NumberSelect
            label="Respiratory Effort"
            name="min5RE"
            options={reValues}
            value={values.min5RE}
            handleChange={handleChange}
          />
          <TextField
            size="small"
            InputProps={{
              readOnly: true
            }}
            value={min5Result}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default function Neonatal() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TimeSetter buttonText="Infant Time of Breathing" />
      </Grid>
      <NeonatalCalculator />
    </Grid>
  );
}

Neonatal.getLayout = getLayout;
