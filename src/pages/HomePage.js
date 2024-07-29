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
import HomeNavbar from "../components/HomeNavbar";

// Cloudinary base URL
const cloudinaryBaseUrl = "https://res.cloudinary.com/dtbpblrgg/video/upload/";

const MainContainer = styled(Container)`
	padding-bottom: 40px;
	text-align: center;
`;

const HeroSection = styled.section`
	color: white;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	overflow: hidden;

	video {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-fit: cover;
	}

	.video-caption {
		position: absolute;
		bottom: 10px;
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #f0f0f0;
		z-index: 2;
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
	padding-top: 700px;
	background-color: #fff;
	text-align: center;
`;

const ContactSection = styled.section`
	padding: 20px;
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
	// Function to create Cloudinary URL with responsive parameters
	const createCloudinaryUrl = (
		publicId,
		width,
		height,
		quality = "auto",
		crop = "limit"
	) => {
		return `${cloudinaryBaseUrl}w_${width},h_${height},c_${crop},q_${quality}/${publicId}`;
	};

	// Cloudinary video URL with transformations
	const cloudinaryVideoUrl = createCloudinaryUrl(
		"homepage_xxie1m",
		1280,
		720,
		"auto",
		"limit"
	);

	return (
		<div>
			<HomeNavbar />
			<Box sx={{ paddingTop: "100px" }}></Box>
			<HeroSection id="hero" className="hero">
				<video autoPlay muted loop>
					<source src={cloudinaryVideoUrl} type="video/webm" />
					Your browser does not support the video tag.
				</video>
				<div className="video-caption">Credit: Visit Rwanda</div>
			</HeroSection>

			<MainContainer>
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
								<Button
									variant="contained"
									color="primary"
									size="large"
									component={RouterLink}
									to="/login"
								>
									Get Started
								</Button>
							</CardContent>
						</ContactCard>
					</SectionContent>
				</AboutSection>
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
									Experience tourist attractions in an immersive way using AR/VR
									technology.
								</Typography>
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard>
								<Typography variant="h5" component="h3">
									Voice Assistance
								</Typography>
								<Typography variant="body1">
									Get voice-guided assistance for a hands-free experience while
									exploring.
								</Typography>
							</FeatureCard>
						</Grid>
					</Grid>
				</FeaturesSection>
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
