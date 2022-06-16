import * as React from "react";
import type { NextPage } from "next";

import { getLayout } from "../src/layouts/SiteLayout";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

type HomeComponent = NextPage & { getLayout: typeof getLayout };

const Home: HomeComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ display: "flex", flexWrap: "wrap" }}>
          <CardMedia
            component="img"
            image="https://img1.wsimg.com/isteam/ip/ab5736b4-7b28-46bc-9238-215c977ce055/ambulance.png/:/cr=t:9.68%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:600,h:500,cg:true,m"
            sx={{
              minWidth: "calc(60% - (1rem * 2))",
              maxWidth: "100%",
              flexGrow: 1,
              flexBasis: "calc(calc(40rem - 100%) * 999)"
            }}
          />
          <CardContent
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "calc(40% - (1rem * 2))",
              maxWidth: "100%",
              flexGrow: 1,
              flexBasis: "calc(calc(40rem - 100%) * 999)",
              margin: "1rem"
            }}
          >
            <Typography variant="overline" color="text.secondary">
              Welcome
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Live well & safe with peace of mind
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get started on the path to health!
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" href="/services">
                Telehealth Appts
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          variant="outlined"
          sx={{ border: "none", display: "flex", flexWrap: "wrap" }}
        >
          <CardMedia
            component="img"
            image="https://img1.wsimg.com/isteam/stock/NB076E4/:/rs=w:1160,h:676"
            sx={{
              minWidth: "calc(50% - (1rem * 2))",
              maxWidth: "100%",
              flexGrow: 1,
              flexBasis: "calc(calc(50rem - 100%) * 999)"
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "calc(50% - (1rem * 2))",
              maxWidth: "100%",
              flexGrow: 1,
              flexBasis: "calc(calc(50rem - 100%) * 999)",
              margin: "1rem"
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Keeping Your Health in Mind
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Call us to discuss customized solutions for your real-time
              pre-hospital ambulance data collection and data visualization for
              a 911 call.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12}>
          <Typography
            fontSize="1rem"
            color="primary.main"
            variant="overline"
            component="div"
          >
            The Practice
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In emergency situations, our system provides timely access to your
              vital patient information and other critical health care data
              required for better treatments. This system also assists
              caregivers in exchange of information with the nearest hospitals
              during an emergency, to provide life-impacting treatment during
              the first golden hour.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Experience and Professionalism
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With years of R&D experience in IT services for healthcare, our
              team will provide support to you to access quickly medical help.
              We understand the importance of educating you on the most
              effective ways to keep you safe during emergency, so that you can
              access medical help quickly.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" component="div" gutterBottom>
              We Care
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We care that you can reach a hospital and medical help as soon as
              possible. We also work to maximize your prevention strategies. We
              strive to help you improve your quality of life and care, by
              providing access to medical history for quicker diagnosis and
              efficient care.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center"
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          Subscribe
        </Typography>
        <Typography variant="body2">Sign up to hear from us.</Typography>
        <Stack
          component="form"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          <TextField
            sx={{ minWidth: "60%" }}
            variant="standard"
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
          />
          <Button variant="contained">Sign Up</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

Home.getLayout = getLayout;

export default Home;
