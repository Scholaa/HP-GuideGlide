import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HomeNavbar = () => (
	<AppBar position="fixed">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				GuideGlide
			</Typography>
			<Button color="inherit" component={RouterLink} to="/">
				Home
			</Button>
			<Button color="inherit" component={RouterLink} to="/about">
				About
			</Button>
			<Button color="inherit" component={RouterLink} to="/features">
				Features
			</Button>
			<Button color="inherit" component={RouterLink} to="/contact">
				Contact
			</Button>
			<Button color="inherit" component={RouterLink} to="/login">
				Login
			</Button>
		</Toolbar>
	</AppBar>
);

export default HomeNavbar;
