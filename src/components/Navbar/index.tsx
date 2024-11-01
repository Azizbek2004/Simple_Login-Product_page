import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const currentUser = getFromLocalStorage("currentUser");

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Register", href: "/register" },
  ];

  const handleLogout = () => {
    removeFromLocalStorage("currentUser");
    router.push("/");
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <div
            className="menu-buttons"
            style={{ display: "flex", gap: "16px" }}
          >
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.text}
                style={{ textDecoration: "none" }}
                passHref
              >
                <Button
                  color="inherit"
                  sx={{
                    borderBottom:
                      router.pathname === item.href ? "2px solid #fff" : "none",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
                    display: { xs: "none", md: "block" },
                    color: "#fff",
                  }}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
            {currentUser && (
              <Button color="secondary" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <Link href={item.href} key={item.text} passHref>
              <ListItem disablePadding>
                <ListItemButton onClick={() => toggleDrawer(false)}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          {currentUser && (
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
