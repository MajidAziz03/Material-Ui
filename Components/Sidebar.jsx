import { Home, Mode, ModeNight, MoodRounded, Person2, Settings } from '@mui/icons-material'
import { Box, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  // p for padding in box 
  return (
    <Box flex={1} p={2} bgcolor="#999" sx={{ display: { xs: "none", sm: "block" } }} >
      <ListItemButton component='a' href='#home' >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Homepage" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Person2 />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ModeNight />
        </ListItemIcon>
        <Switch></Switch>
      </ListItemButton>
    </Box>
  )
}

export default Sidebar