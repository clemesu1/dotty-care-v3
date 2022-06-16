import type { NextPage } from "next";

import { getLayout } from "../src/layouts/SiteLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

type AboutUsComponent = NextPage & { getLayout: typeof getLayout };

const AboutUs: AboutUsComponent = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography
          fontSize="1rem"
          color="primary.main"
          variant="overline"
          component="div"
        >
          Areas of Speciality
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body2" color="text.secondary">
            At Dotty Emergency Assistive Care Inc., we{" "}
            <b>
              provide electronic health recording (EHR) solutions for emergency
              ambulatory services and patient monitoring.
            </b>{" "}
            Visual analytic tools ensure timely and high quality care. Our
            predictive analytical services will empower clients by allowing them
            to monitor their evolving health and treatment patterns, as well as
            understanding common practices in maintaining good health. Dottycare
            solutions have been developed working in collaborative research with
            hospitals and nursing homes in Canada
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Emergency Services
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Transmit observation data and patient care clinical data from the
            scene to the hospital using global health protocol and wireless
            network. Whether you're sick or only need some routine maintenance,
            we're here for you!
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Monitoring Services
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We provide remote web-based solutions that assist in chronic disease
            management for diseases such as diabetics and monitors the condition
            of heart, lungs, and other vital signs. The system will provide
            alert/alarms in the event of an emergency health condition (e.g., a
            fall among elderly individuals, etc.). !
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
          The Team
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Janet Light
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Janet Light is the Founder and CEO of Dotty Emergency Assistive Care
            Inc. Dr. Light has her PhD in Computer Science and Professor at the
            University of New Brunswick, Canada. She manages our team and makes
            sure all our backgrounds work together to help support your health
            goals.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Raafey Mohammed
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Raafey Ahmed is an Executive Director in Dotty Emergency Assistive
            Care Inc. Er. Ahmed has his Masters in Computer Science from
            University of New Brunswick. He has several years of experience in
            Database Services.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Benjamin Richardson
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Benjamin Richardson is a Director in Dotty Emergency Assistive Care
            Inc. Mr. Richardson is a graduate in Computer from the University of
            New Brunswick. An experienced software developer and visionary of
            future technology systems.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Goutham Subramanian
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Goutham Subramanian is a Director in Dotty Emergency Assistive Care
            Inc. Er. Richardson is a business graduate from the University of
            New Brunswick. His passion is to build good business relations with
            customers and services.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

AboutUs.getLayout = getLayout;

export default AboutUs;
