import type { ReactElement, ReactNode } from "react";

import { useState } from "react";

import NavBar from "../components/NavBar";
import DashboardSideNav from "../components/DashboardSideNav";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Copyright from "../components/Copyright";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <NavBar setOpen={setOpen} />
      <Box sx={{ display: "flex" }}>
        <DashboardSideNav open={open} setOpen={setOpen} />
        <Container maxWidth="lg">
          <Box component="main" sx={{ mt: 1, mb: 2 }}>
            <Toolbar />
            {children}
          </Box>
          <Copyright />
        </Container>
      </Box>
    </>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
