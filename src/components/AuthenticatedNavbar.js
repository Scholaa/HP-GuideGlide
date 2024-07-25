import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AuthenticatedNavbar = ({ signOut }) => (
	<AppBar position="fixed">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				GuideGlide
			</Typography>
			<Button color="inherit" component={RouterLink} to="/">
				Home
			</Button>
			<Button color="inherit" component={RouterLink} to="/map">
				Destinations
			</Button>
			<Button color="inherit" component={RouterLink} to="/transport-safety">
				Travel & Safety
			</Button>
			<Button color="inherit" component={RouterLink} to="/weather">
				Weather Forecast
			</Button>
			<Button color="inherit" component={RouterLink} to="/profile">
				Profile
			</Button>
			<Button color="inherit" onClick={signOut}>
				Logout
			</Button>
		</Toolbar>
	</AppBar>
);

export default AuthenticatedNavbar;
