import type { NextPage } from "next";

import { getLayout } from "../src/layouts/SiteLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

type ServicesComponent = NextPage & { getLayout: typeof getLayout };

const Services: ServicesComponent = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography
          fontSize="1rem"
          color="primary.main"
          variant="overline"
          component="div"
        >
          Services
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            24 Hour Service
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We know that your medical needs don't stop when office hours are
            over. Using our help line and our email service, you can get a
            message to your health team when it is convenient for you.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Wellness Support
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our team will support you in building a healthier you. No matter
            what your health needs are, having a team support you will keep you
            on the path to meeting them. We work together to connect you with
            the services you need.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            A Healthy Community
          </Typography>
          <Typography variant="body2" color="text.secondary">
            When you choose us, you join a community. We work not just with you
            but with other members of our community to build a network of people
            working together for a healthier world.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography
          fontSize="1rem"
          color="primary.main"
          variant="overline"
          component="div"
        >
          Online Appointments
        </Typography>
      </Grid>
    </Grid>
  );
};

Services.getLayout = getLayout;

export default Services;
