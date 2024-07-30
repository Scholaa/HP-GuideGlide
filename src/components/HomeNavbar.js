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
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery, useTheme } from "@mui/material";

const HomeNavbar = () => {
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
		{ label: "About", to: "about", scroll: true },
		{ label: "Features", to: "features", scroll: true },
		{ label: "Contact", to: "contact", scroll: true },
		{ label: "Login", to: "/login" },
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
						{item.scroll ? (
							<ScrollLink
								to={item.to}
								smooth={true}
								duration={500}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<ListItemText primary={item.label} />
							</ScrollLink>
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
				<Typography
					variant="h6"
					style={{ textDecoration: "none", color: "inherit" }}
					component={RouterLink}
					to="/"
					sx={{ flexGrow: 1 }}
				>
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
						item.scroll ? (
							<ScrollLink
								key={item.label}
								to={item.to}
								smooth={true}
								duration={500}
								style={{
									marginRight: 15,
									cursor: "pointer",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								<Button color="inherit">{item.label}</Button>
							</ScrollLink>
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

export default HomeNavbar;
