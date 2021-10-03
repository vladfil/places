import React, {FC, useState} from 'react'
import {useAppContext} from 'store/context'
import {
  Box,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
} from '@mui/material'
import {PersonAdd, Logout} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const TopBar: FC = () => {
  const {state} = useAppContext()
  const {auth} = state
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  // @TODO add TS event React.MouseEventHandler<MouseEvent> for event arg
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed">
        <Grid justifyContent="space-between" flexWrap="wrap" display="flex">
          <Grid sx={{flex: '0 0 200px'}}>
            <Toolbar>
              <ListItem button component={Link} to="/">
                <ListItemText sx={{textAlign: 'center'}} primary="LOGO" />
              </ListItem>
            </Toolbar>
          </Grid>
          <Grid
            sx={{
              flex: '0 0 calc(100% - 200px)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {auth ? (
              <>
                <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
                  <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                  <MenuItem component={Link} to="/profile">
                    <Avatar />
                    <ListItemText primary="Profile" />
                  </MenuItem>
                  <Divider />
                  <MenuItem component={Link} to="/new-post">
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Add post" />
                  </MenuItem>
                  <MenuItem component={Link} to="/logout">
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Toolbar sx={{marginLeft: 'auto'}}>
                  <ListItem
                    sx={{width: 'auto'}}
                    button
                    component={Link}
                    to="/sign-in"
                  >
                    <ListItemText primary="Sign In" />
                  </ListItem>
                  <ListItem
                    sx={{width: 'auto'}}
                    button
                    component={Link}
                    to="/sign-up"
                  >
                    <ListItemText primary="Sign Up" />
                  </ListItem>
                </Toolbar>
              </>
            )}
          </Grid>
        </Grid>
      </AppBar>
      <Grid sx={{minHeight: 64}} />
    </Box>
  )
}

export default TopBar
