import {FC} from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Menu,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material'
import {Link} from 'react-router-dom'

const TopBar: FC = () => {
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
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}

export default TopBar
