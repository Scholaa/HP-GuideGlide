import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import axios from "axios";
import Map from "./components/Map";
import HomePage from "./pages/HomePage";
import RecsPage from "./pages/RecsPage";
import TransportSafetyPage from "./pages/TransportSafetyPage";
import WeatherPage from "./pages/WeatherPage";
import ProfilePage from "./pages/ProfilePage";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./styles.css";
import AuthenticatedNavbar from "./components/AuthenticatedNavbar";

const App = () => {
	const [attractions, setAttractions] = useState([]);

	useEffect(() => {
		const fetchAttractions = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_ATTRACTIONS_API_URL}/attractions`
				);
				setAttractions(response.data);
			} catch (error) {
				console.error("Error fetching attractions:", error);
			}
		};

		fetchAttractions();
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<div>About Page</div>} />
					<Route path="/features" element={<div>Features Page</div>} />
					<Route path="/contact" element={<div>Contact Page</div>} />
					<Route
						path="/map"
						element={
							<Authenticator>
								{({ signOut, user }) => (
									<>
										<AuthenticatedNavbar signOut={signOut} />
										<Map
											attractions={attractions}
											username={user ? user.username : ""}
											signOut={signOut}
										/>
									</>
								)}
							</Authenticator>
						}
					/>
					<Route
						path="/transport-safety"
						element={
							<Authenticator>
								{({ signOut, user }) => (
									<>
										<AuthenticatedNavbar signOut={signOut} />
										<TransportSafetyPage user={user} signOut={signOut} />
									</>
								)}
							</Authenticator>
						}
					/>
					<Route
						path="/weather"
						element={
							<Authenticator>
								{({ signOut, user }) => (
									<>
										<AuthenticatedNavbar signOut={signOut} />
										<WeatherPage user={user} signOut={signOut} />
									</>
								)}
							</Authenticator>
						}
					/>
					<Route
						path="/profile"
						element={
							<Authenticator>
								{({ signOut, user }) => (
									<>
										<AuthenticatedNavbar signOut={signOut} />
										<ProfilePage user={user} signOut={signOut} />
									</>
								)}
							</Authenticator>
						}
					/>
					<Route
						path="/recommendations"
						element={
							<Authenticator>
								{({ signOut, user }) => (
									<>
										<AuthenticatedNavbar signOut={signOut} />
										<RecsPage user={user} signOut={signOut} />
									</>
								)}
							</Authenticator>
						}
					/>
					<Route
						path="/login"
						element={
							<Authenticator>
								{({ signOut, user }) => {
									if (user) {
										return <Navigate to="/map" replace />; // Redirect to a protected route if needed
									}
									return <div>Please log in</div>;
								}}
							</Authenticator>
						}
					/>
				</Routes>
			</Container>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor: "#f5f5f5",
					textAlign: "center",
				}}
			>
				<Container maxWidth="sm">
					<Typography variant="body1">
						&copy; 2024 GuideGlide. All rights reserved.
					</Typography>
				</Container>
			</Box>
		</Box>
	);
};

export default App;


