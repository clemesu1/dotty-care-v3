import * as React from "react";

import type { NextPage } from "next";

import { getLayout } from "../src/layouts/SiteLayout";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContactFormModal from "../src/components/ContactFormModal";

type ContactUsComponent = NextPage & { getLayout: typeof getLayout };

const ContactUs: ContactUsComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ textAlign: "center", my: { xs: 2, sm: 3 } }}>
        <Typography color="primary" variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Please contact us directly with any questions, comments, or scheduling
          inquiries you may have.
        </Typography>
      </Box>
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>

        <Box
          component="form"
          action=""
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Box>
            <Box sx={{ display: "flex", my: 2 }}>
              <LocationOnIcon color="primary" />
              <Typography color="text.secondary" sx={{ ml: 2 }}>
                290 Crown Street, Saint John, NB
              </Typography>
            </Box>
            <Box sx={{ display: "flex", my: 2 }}>
              <EmailIcon color="primary" />
              <Typography color="text.secondary" sx={{ ml: 2 }}>
                hello@dottycare.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", my: 2 }}>
              <AccessTimeIcon color="primary" />
              <Box sx={{ textAlign: "start" }}>
                <Typography color="text.secondary" sx={{ ml: 2 }}>
                  Monday - Friday: 8AM–8PM
                </Typography>
                <Typography color="text.secondary" sx={{ ml: 2 }}>
                  Saturday - Sunday: 8AM–6PM
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpen}>
            Send Message
          </Button>
        </Box>
      </Paper>
      <ContactFormModal open={open} onClose={handleClose} />
    </>
  );
};

ContactUs.getLayout = getLayout;

export default ContactUs;
