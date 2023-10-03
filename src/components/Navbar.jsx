import styled from "@emotion/styled"
import { AppBar, Avatar, Badge, Box, Button, Divider, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, SwipeableDrawer, Switch, Toolbar, Typography } from "@mui/material"
import { Cable, Description, Group, Home, Inbox, Mail, ModeNight, Notifications, Person, Portrait, Settings, Storefront } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px",
  gap: "5px"
})

const BrandToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px",
})

const Search = styled('div')({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "3px",
  width: "40%"
})

const Icons = styled(Box)({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  padding: "0px 10px"
})

const Navbar = ({ mode, toggle }) => {

  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(state);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Portrait />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={(e) => toggle(mode === 'dark' ? "light" : "dark")} />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <Button onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "flex", sm: "none" },
            padding: "0px",

          }}>
          <MenuIcon
            sx={{
              color: "white",
              width: "40px"
            }}
          ></MenuIcon>
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
        <BrandToolbar>
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Connect
          </Typography>
          <Cable fontSize="large" />
        </BrandToolbar>
        <Search>
          <InputBase placeholder="Search ..." sx={{ color: "black" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: "30px", height: "30px" }} onClick={(e) => setOpen(true)} />
          <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }} onClick={(e) => setOpen(true)}>John Doe</Typography>
        </Icons>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </CustomToolbar>
    </AppBar>
  )
}

export default Navbar;