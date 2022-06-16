import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";

import Link from "./Link";

type PagesProps = {
  name: string;
  icon: any;
  url: string;
};

const pages: PagesProps[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/"
  },
  {
    name: "Services",
    icon: <BusinessCenterIcon />,
    url: "/services"
  },
  {
    name: "About Us",
    icon: <InfoIcon />,
    url: "/about-us"
  },
  {
    name: "Contact Us",
    icon: <MailIcon />,
    url: "/contact-us"
  }
];

const settings: PagesProps[] = [
  // {
  //   name: "My Account",
  //   icon: <PersonIcon />,
  //   url: "/account"
  // },
  {
    name: "Bookings",
    icon: <EventNoteIcon />,
    url: "/bookings"
  },
  {
    name: "Create New Patient Report",
    icon: <NoteAddIcon />,
    url: "/dashboard/operator-details"
  },
  {
    name: "Call Transactions",
    icon: <DashboardIcon />,
    url: "/dashboard/call-transactions"
  }
];

const drawerWidth: number = 240;

export default function SideNav({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data: session } = useSession();

  const handleDrawerToggle = () => {
    setOpen((open) => !open);
  };
  const handleSignIn = async () => {
    await signIn();
  };
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 }
      }}
    >
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth
          }
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
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
              key={page.name}
              disablePadding
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
        <Divider />
        <List subheader={<ListSubheader>Account Settings</ListSubheader>}>
          {session ? (
            <>
              {settings.map((page) => (
                <ListItem
                  key={page.name}
                  disablePadding
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
              <ListItem disablePadding sx={{ color: "inherit" }}>
                <ListItemButton onClick={handleSignOut}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding sx={{ color: "inherit" }}>
              <ListItemButton onClick={handleSignIn}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
}
