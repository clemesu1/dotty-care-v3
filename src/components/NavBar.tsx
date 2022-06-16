import React, { useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";

import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
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
  }
];

export default function NavBar({
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data: session } = useSession();
  const { resolvedTheme, setTheme } = useTheme();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElMore, setAnchorElMore] = useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorElMore);

  const handleDrawerToggle = () => {
    setOpen((open) => !open);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSignIn = async () => {
    await signIn();
  };
  const handleSignOut = async () => {
    await signOut();
  };
  const handleOpenMoreMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMore(event.currentTarget);
  };

  const handleCloseMoreMenu = () => {
    setAnchorElMore(null);
  };

  function UserMenu() {
    return (
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <ListItem sx={{ py: 0 }}>
          <ListItemText
            primary={session?.user?.name}
            secondary={session?.user?.email}
          ></ListItemText>
        </ListItem>
        <Divider />
        {settings.map((setting) => (
          <MenuItem
            key={setting.name}
            onClick={handleCloseUserMenu}
            component={Link}
            href={setting.url}
          >
            <ListItemIcon>{setting.icon}</ListItemIcon>
            <ListItemText primary={setting.name} />
          </MenuItem>
        ))}
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    );
  }
  function MoreMenu() {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorElMore}
        open={openMenu}
        onClose={handleCloseMoreMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        sx={{
          "& .MuiMenu-paper": {
            width: 240
          }
        }}
      >
        <ListItem sx={{ py: 0 }}>
          <ListItemText>
            <Typography variant="subtitle2" color="text.secondary">
              View Options
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          secondaryAction={
            <Switch
              checked={resolvedTheme === "dark"}
              onChange={() =>
                setTheme(resolvedTheme === "light" ? "dark" : "light")
              }
              inputProps={{ "aria-label": "dark mode switch" }}
            />
          }
        >
          <ListItemIcon>
            {resolvedTheme === "light" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </ListItemIcon>
          <ListItemText>
            {resolvedTheme === "light" ? "Dark" : "Light"} Mode
          </ListItemText>
        </ListItem>
      </Menu>
    );
  }

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: {
          lg: theme.zIndex.drawer + 1
        }
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              edge="start"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                href={page.url}
                onClick={handleDrawerToggle}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }} />
          {session ? (
            <>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={session.user?.name ?? ""}
                  src={session.user?.image ?? ""}
                />
              </IconButton>
              <UserMenu />
            </>
          ) : (
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              onClick={handleSignIn}
            >
              Login
            </Button>
          )}

          <IconButton
            size="small"
            color="inherit"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleOpenMoreMenu}
          >
            <MoreIcon />
          </IconButton>
          <MoreMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
