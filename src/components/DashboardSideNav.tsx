import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HealingIcon from "@mui/icons-material/Healing";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import { useRouter } from "next/router";

import Link from "./Link";

type PagesProps = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export default function DashboardSideNav({
  open,
  setOpen,
  window
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  window?: () => Window;
}) {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setOpen((open) => !open);
  };

  const {
    query: { cid }
  } = useRouter();

  const pages: PagesProps[] = [
    {
      name: "Call Details",
      url: `/dashboard/${cid}/call-details/vehicle-details`,
      icon: <PhoneIcon />
    },
    {
      name: "Assessment",
      url: `/dashboard/${cid}/assessment/patient-history/general`,
      icon: <AssignmentIcon />
    },
    {
      name: "Treatment",
      url: `/dashboard/${cid}/treatment/interventions`,
      icon: <HealingIcon />
    },
    {
      name: "Call Report",
      url: `/dashboard/${cid}/call-report`,
      icon: <FactCheckIcon />
    }
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          href="/"
          sx={{
            my: 2,
            color: "inherit",
            textDecoration: "none"
          }}
        >
          Dotty Care
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem
            disablePadding
            key={page.name}
            component={Link}
            href={page.url}
            sx={{ color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const drawerWidth = 240;

  return (
    <Box
      component="nav"
      sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
