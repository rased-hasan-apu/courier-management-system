import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CottageIcon from '@mui/icons-material/Cottage';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import { useRouteMatch } from 'react-router-dom';
import AddUser from '../AddUser/AddUser';

const drawerWidth = 240;



const AdminPanel = (props) => {
    const { window } = props;
    let { path, url } = useRouteMatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List >
        <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to='/home'>
        <ListItem button>
         <CottageIcon/>
         <ListItemText style={{marginLeft:"5px"}}primary="Home" />
         </ListItem>
        </Link>
        <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/adduser`}>
        <ListItem button>
         <AddCircleIcon/>
         <ListItemText style={{marginLeft:"5px"}}primary="Add A User" />
         </ListItem>
        </Link>
        </List>
       
         
        <Divider />
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Courier Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Switch>
              <Route  path={`${path}/adduser`}>
               <AddUser></AddUser>
              </Route>
          </Switch>
          
        </Box>
      </Box>
    );
  }
  AdminPanel.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  


export default AdminPanel;