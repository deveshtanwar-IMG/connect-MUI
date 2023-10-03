import { Description, Group, Home, ModeNight, Person, Portrait, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode, toggle}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
      <Box position="fixed">
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
              <Switch onChange={(e)=>toggle(mode === 'dark' ? "light": "dark")}/>
            </ListItemButton>
          </ListItem>
          
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar;