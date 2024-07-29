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
	ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const AuthenticatedNavbar = ({ signOut }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setDrawerOpen(open);
	};

	const menuItems = [
		{ label: "Home", to: "/" },
		{ label: "Destinations", to: "/map" },
		{ label: "Travel & Safety", to: "/transport-safety" },
		{ label: "Weather Forecast", to: "/weather" },
		{ label: "Profile", to: "/profile" },
		// { label: "Recommendations", to: "/recommendations" },
		{ label: "Logout", to: "/", action: signOut },
	];

	const drawerList = () => (
		<div
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
			role="presentation"
		>
			<List>
				{menuItems.map((item) => (
					<ListItem button key={item.label}>
						{item.action ? (
							<Button
								onClick={item.action}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<ListItemText primary={item.label} />
							</Button>
						) : (
							<RouterLink
								to={item.to}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<ListItemText primary={item.label} />
							</RouterLink>
						)}
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					GuideGlide
				</Typography>
				{isMobile ? (
					<>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={toggleDrawer(true)}
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="right"
							open={drawerOpen}
							onClose={toggleDrawer(false)}
						>
							{drawerList()}
						</Drawer>
					</>
				) : (
					menuItems.map((item) =>
						item.action ? (
							<Button key={item.label} color="inherit" onClick={item.action}>
								{item.label}
							</Button>
						) : (
							<Button
								key={item.label}
								color="inherit"
								component={RouterLink}
								to={item.to}
							>
								{item.label}
							</Button>
						)
					)
				)}
			</Toolbar>
		</AppBar>
	);
};

export default AuthenticatedNavbar;
