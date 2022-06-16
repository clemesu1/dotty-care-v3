import * as React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import Grid from "@mui/material/Grid";

export default function ContactFormModal({ open, onClose }) {
  const [time, setTime] = React.useState<Date | null>();

  const handleTimeChange = (newTime: Date | null) => {
    setTime(newTime);
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Send Message</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              autoComplete="name"
              placeholder="John Doe"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              autoComplete="email"
              placeholder="example@email.com"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              type="tel"
              fullWidth
              variant="standard"
              autoComplete="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TimePicker
              label="Time"
              value={time}
              onChange={handleTimeChange}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  margin="dense"
                  variant="standard"
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="message"
              label="Message"
              type="text"
              fullWidth
              variant="standard"
              multiline
              rows={2}
              placeholder="Write your message..."
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} variant="contained">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}
