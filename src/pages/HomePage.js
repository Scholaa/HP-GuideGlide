import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	Grid,
	Box,
	Card,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import HeroImage from "../assets/hero-image.jpeg";
import HomeNavbar from "../components/HomeNavbar";

const MainContainer = styled(Container)`
	padding-top: 80px;
	padding-bottom: 40px;
	text-align: center;
`;

const HeroSection = styled.section`
	background-image: url(${HeroImage});
	background-size: cover;
	background-position: center;
	color: white;
	padding: 60px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 400px;
	.hero-content {
		max-width: 600px;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 20px;
		border-radius: 8px;
		h1 {
			margin-bottom: 20px;
		}
		p {
			margin-bottom: 30px;
		}
		.btn-primary {
			background-color: #3f51b5;
			color: white;
			padding: 10px 20px;
			border-radius: 4px;
			text-decoration: none;
			&:hover {
				background-color: #303f9f;
			}
		}
	}
`;

const FeaturesSection = styled.section`
	padding: 60px 20px;
`;

const FeatureCard = styled(Card)`
	background-color: #f5f5f5;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 20px;
	text-align: left;
	margin: 10px;
`;

const HomePage = () => {
	return (
		<div>
			<HomeNavbar />
			<MainContainer>
				<HeroSection className="hero">
					<div className="hero-content">
						<Typography variant="h2" component="h1">
							Discover Amazing Tourist Attractions
						</Typography>
						<Typography variant="body1">
							GuideGlide helps you explore and learn more about the best tourist
							spots around you.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							size="large"
							component={RouterLink}
							to="/get-started"
						>
							Get Started
						</Button>
					</div>
				</HeroSection>
				<FeaturesSection className="features">
					<Typography variant="h3" component="h2">
						Features
					</Typography>
					<Grid container spacing={3} justifyContent="center">
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									Interactive Maps
								</Typography>
								<Typography variant="body1">
									Explore tourist attractions with our easy-to-use interactive
									maps that provide detailed views and navigational features.
								</Typography>
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									Transport & Safety
								</Typography>
								<Typography variant="body1">
									Get up-to-date information on transport options and safety
									measures to ensure a smooth and secure journey.
								</Typography>
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									Weather Forecast
								</Typography>
								<Typography variant="body1">
									Stay informed about the latest weather updates to plan your
									trips better and avoid any weather-related disruptions.
								</Typography>
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									Personalised Recommendation System
								</Typography>
								<Typography variant="body1">
									Receive personalized recommendations based on your interests
									and preferences to make the most out of your travels.
								</Typography>
							</FeatureCard>
						</Grid>
					</Grid>
				</FeaturesSection>
			</MainContainer>
			{/* <Box
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
			</Box> */}
		</div>
	);
};

export default HomePage;
