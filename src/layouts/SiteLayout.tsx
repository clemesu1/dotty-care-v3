import { useState } from "react";
import type { ReactNode, ReactElement } from "react";

import ScrollTop from "../components/ScrollTop";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";
import Copyright from "../components/Copyright";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <NavBar setOpen={setOpen} />
      <SideNav open={open} setOpen={setOpen} />
      <Container maxWidth="md">
        <Toolbar id="back-to-top-anchor" />
        <Box component="main" sx={{ my: 2 }}>
          {children}
        </Box>
        <Copyright />
      </Container>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
