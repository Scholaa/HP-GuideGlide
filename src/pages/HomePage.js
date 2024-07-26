import React from "react";
import {
	Typography,
	Button,
	Container,
	Grid,
	Box,
	Card,
	CardContent,
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

const AboutSection = styled.section`
	padding: 60px 20px;
	background-color: #fff;
	text-align: center;
`;

const ContactSection = styled.section`
	padding: 60px 20px;
	background-color: #fff;
	text-align: center;
`;

const SectionContent = styled.div`
	max-width: 800px;
	margin: 0 auto;
	text-align: left;
	p {
		margin-bottom: 15px;
	}
`;

const ContactCard = styled(Card)`
	background-color: #f5f5f5;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 20px;
	text-align: left;
	margin: 10px auto;
	max-width: 800px;
`;

const HomePage = () => {
	return (
		<div>
			<HomeNavbar />
			<MainContainer>
				<HeroSection id="hero" className="hero">
					<div className="hero-content">
						<Typography variant="h2" component="h1">
							Discover Amazing Tourist Attractions in Rwanda
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
				<FeaturesSection id="features" className="features">
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
									Travel & Safety
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
									Personalised Suggestions
								</Typography>
								<Typography variant="body1">
									Receive personalised recommendations based on your interests
									and preferences to make the most out of your travels.
								</Typography>
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									AR/VR Experience
								</Typography>
								<Typography variant="body1">
									Receive personalised recommendations based on your interests
									and preferences to make the most out of your travels.
								</Typography>
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									Voice assistance
								</Typography>
								<Typography variant="body1">
									Receive personalised recommendations based on your interests
									and preferences to make the most out of your travels.
								</Typography>
							</FeatureCard>
						</Grid>
					</Grid>
				</FeaturesSection>
				<AboutSection id="about" className="about">
					<Typography variant="h3" component="h2">
						About Us
					</Typography>
					<SectionContent>
						<ContactCard>
							<CardContent>
								<Typography variant="body1">
									GuideGlide is dedicated to helping travelers discover the
									beauty of Rwanda. Our platform offers a comprehensive guide to
									the best tourist attractions, interactive maps, and up-to-date
									travel information to make your journey memorable and safe.
								</Typography>
							</CardContent>
						</ContactCard>
					</SectionContent>
				</AboutSection>
				<ContactSection id="contact" className="contact">
					<Typography variant="h3" component="h2">
						Contact Us
					</Typography>
					<ContactCard>
						<CardContent>
							<Typography variant="body1">
								Have questions or need assistance? Reach out to us at:
							</Typography>
							<Typography variant="body1">
								Email: support@guideglide.com
							</Typography>
							<Typography variant="body1">Phone: +250 123 456 789</Typography>
							<Typography variant="body1">Address: Kigali, Rwanda</Typography>
						</CardContent>
					</ContactCard>
				</ContactSection>
			</MainContainer>
		</div>
	);
};

export default HomePage;
