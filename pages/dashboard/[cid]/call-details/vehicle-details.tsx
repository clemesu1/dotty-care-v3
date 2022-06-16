import { getLayout } from "../../../../src/layouts/CallDetailsLayout";
import NumberIncrementer from "../../../../src/components/NumberIncrementer";
import TimeSetter from "../../../../src/components/TimeSetter";
import ResponseSelector from "../../../../src/components/ResponseSelector";
import CrewTypeSelector from "../../../../src/components/CrewTypeSelector";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../src/app/store";

import { onChange } from "../../../../src/features/vehicleDetailsSlice";

export default function VehicleDetails() {
  const vehicleDetails = useSelector(
    (state: RootState) => state.vehicleDetails
  );

  const dispatch = useDispatch();

  const handleChange = (name: string, value: any) => {
    dispatch(onChange({ name, value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NumberIncrementer
          primary="Number of Patient(s) Transported"
          name="numPtTrans"
          value={vehicleDetails.numPtTrans}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle2" component="h3" gutterBottom>
            Time
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="Notified"
                name="tNotif"
                value={vehicleDetails.tNotif}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="En Route"
                name="tEnRoute"
                value={vehicleDetails.tEnRoute}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="At Scene"
                name="tAtScene"
                value={vehicleDetails.tAtScene}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="Crew Patient"
                name="tCrewPt"
                value={vehicleDetails.tCrewPt}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="Left Scene"
                name="tLeftScene"
                value={vehicleDetails.tLeftScene}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="At Destination"
                name="tAtDest"
                value={vehicleDetails.tAtDest}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="Available"
                name="tAvail"
                value={vehicleDetails.tAvail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TimeSetter
                buttonText="Back Area"
                name="tBackArea"
                value={vehicleDetails.tBackArea}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle2" component="h3" gutterBottom>
            Response to Scene
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <ResponseSelector
                label="Type"
                name="rtsType"
                value={vehicleDetails.rtsType}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ResponseSelector
                label="Change in Response"
                name="rtsChange"
                value={vehicleDetails.rtsChange}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle2" component="h3" gutterBottom>
            Response from Scene
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <ResponseSelector
                label="Type"
                name="rfsType"
                value={vehicleDetails.rfsType}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ResponseSelector
                label="Change in Response"
                name="rfsChange"
                value={vehicleDetails.rfsChange}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle2" component="h3" gutterBottom>
            Crew Type
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <CrewTypeSelector
                label="Driver"
                name="cDriver"
                value={vehicleDetails.cDriver}
                otherValue={vehicleDetails.cDriverOth}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <CrewTypeSelector
                label="Attendent"
                name="cAttend"
                value={vehicleDetails.cAttend}
                otherValue={vehicleDetails.cAttendOth}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <CrewTypeSelector
                label="Assisting Personnel"
                name="cAsst"
                value={vehicleDetails.cAsst}
                otherValue={vehicleDetails.cAsstOth}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle2" component="h3" gutterBottom>
            Mileage
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} lg>
              <TextField size="small" fullWidth label="Out" />
            </Grid>
            <Grid item xs={12} lg>
              <TextField size="small" fullWidth label="At Scene" />
            </Grid>
            <Grid item xs={12} lg>
              <TextField size="small" fullWidth label="At Destination" />
            </Grid>
            <Grid item xs={12} lg>
              <TextField size="small" fullWidth label="In" />
            </Grid>
            <Grid item xs={12} lg>
              <TextField size="small" fullWidth label="Total" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

VehicleDetails.getLayout = getLayout;
