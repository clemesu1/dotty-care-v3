import { getLayout } from "../../../../../src/layouts/ComplaintBasedLayout";

import Grid from "@mui/material/Grid";

import ComboBoxOther from "../../../../../src/components/ComboBoxOther";
import TimeSetter from "../../../../../src/components/TimeSetter";
import SelectTen from "../../../../../src/components/SelectTen";

import {
  deliveries,
  babyPresentations
} from "../../../../src/components/listItems";

export default function Obstetric() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <SelectTen label="Parity" />
      </Grid>
      <Grid item xs={4}>
        <SelectTen label="Gravidity" />
      </Grid>
      <Grid item xs={4}>
        <SelectTen label="Gestation" />
      </Grid>
      <Grid container item spacing={2} xs={12}>
        <ComboBoxOther label="Delivery" options={deliveries} />
      </Grid>
      <Grid container item spacing={2} xs={12}>
        <ComboBoxOther label="Baby Presentation" options={babyPresentations} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TimeSetter buttonText="Time of Birth" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TimeSetter buttonText="Time of Placenta Delivery" />
      </Grid>
    </Grid>
  );
}

Obstetric.getLayout = getLayout;
