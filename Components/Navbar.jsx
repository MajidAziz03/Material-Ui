import { Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px ",
  cursor: "pointer"
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px ",
  cursor: "pointer"

}))




const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", md: "block" } }}>
          Navbar
        </Typography>
        <Search> <InputBase placeholder='Search here' /> </Search>
        <Icons sx={{ display: { xs: "none", md: "flex" } }} >
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="network error" src="../img/0.jpg" />
        </Icons>
        <UserBox
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={(e)=>setOpen(true)}
        >
          <Avatar alt="network error" src="../img/0.jpg" />
          <Typography variant="p">
            Majid Aziz
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={ (e)=> setOpen(false)}
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
    </AppBar>
  )
}

export default Navbar