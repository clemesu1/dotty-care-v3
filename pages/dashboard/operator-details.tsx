import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";

import { Controller, useForm } from "react-hook-form";

import FormTextField from "../../src/components/FormTextField";

import prisma from "../../utils/prisma";

export async function getServerSideProps() {
  const callTransaction = await prisma.callTransaction.findMany();
  return {
    props: {
      initialCallTransaction: JSON.stringify(callTransaction)
    }
  };
}

async function saveCallTransaction(callTransaction: any) {
  const response = await fetch("/api/operator-details", {
    method: "POST",
    body: JSON.stringify(callTransaction)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default function OperatorDetails({
  initialCallTransaction
}: {
  initialCallTransaction: any;
}) {
  const [callTransaction, setCallTransaction] = React.useState(
    JSON.parse(initialCallTransaction)
  );
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data: any, e: any) => {
    try {
      const call = await saveCallTransaction(data);
      setCallTransaction([...callTransaction, data]);
      e.target.reset();
      router.push(`/dashboard/${call.id}/call-details/vehicle-details`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <HeadsetMicOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Operator Details
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <FormTextField
            name="vehicleId"
            control={control}
            label="Vehicle ID"
            id="vehicle-id"
            error={Boolean(errors?.vehicleId)}
            required
          />
          <FormTextField
            name="driverId"
            control={control}
            label="Driver ID"
            id="driver-id"
            error={Boolean(errors?.driverId)}
            required
          />
          <FormTextField
            name="attendantId"
            control={control}
            label="Attendant ID"
            id="attendant-id"
          />
          <FormTextField
            name="assistantId"
            control={control}
            label="Assistant ID"
            id="assistant-id"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="vehicle-status-label">Vehicle Status</InputLabel>
            <Controller
              control={control}
              name="vehicleStatus"
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId="vehicle-status-label"
                  id="vehicle-status"
                  label="Vehicle Status"
                  onChange={onChange}
                  value={value}
                >
                  <MenuItem value="on-site">on-site</MenuItem>
                  <MenuItem value="off-site">off-site</MenuItem>
                  <MenuItem value="ilt">ILT</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs>
              <Button
                href="/"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
