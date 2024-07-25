import React, { useCallback, useState } from "react";
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import { Button, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import logInteraction from "./logInteraction";
import AuthenticatedNavbar from "./AuthenticatedNavbar"; // Make sure to import the AuthenticatedNavbar component

const mapContainerStyle = {
	height: "500px",
	width: "100%",
};

const center = {
	lat: -1.94995,
	lng: 30.05885,
};

const InfoWindowContainer = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	maxWidth: 400,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const Map = ({ attractions, username, signOut }) => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	const [selected, setSelected] = useState(null);
	const [showDetails, setShowDetails] = useState(false);

	const onMapClick = useCallback(() => {
		setSelected(null);
		setShowDetails(false);
	}, []);

	const handleMarkerClick = (attraction) => {
		setSelected(attraction);
		setShowDetails(false);
		logInteraction(username, attraction.id, "view"); // Use the actual username
	};

	if (loadError) return <div>Error loading maps</div>;
	if (!isLoaded) return <div>Loading Maps...</div>;

	return (
		<div>
			<AuthenticatedNavbar signOut={signOut} />
			<Box sx={{ paddingTop: "80px" }}>
				<Typography variant="h4">Destinations</Typography>
				<Box sx={{ paddingTop: "20px" }}></Box>
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					zoom={12}
					center={center}
					onClick={onMapClick}
				>
					{attractions.map((attraction) => (
						<Marker
							key={attraction.id}
							position={{ lat: attraction.lat, lng: attraction.lng }}
							onClick={() => handleMarkerClick(attraction)}
						/>
					))}

					{selected && (
						<InfoWindow
							position={{ lat: selected.lat, lng: selected.lng }}
							onCloseClick={() => {
								setSelected(null);
								setShowDetails(false);
							}}
						>
							<InfoWindowContainer>
								<Typography variant="h6" gutterBottom>
									{selected.name}
								</Typography>
								<img
									src={selected.image}
									alt={selected.name}
									style={{ width: "100%", height: "auto" }}
								/>
								<Typography variant="body1" paragraph>
									{selected.description}
								</Typography>
								{showDetails ? (
									<Box>
										<Typography variant="body2">
											<strong>Location:</strong> {selected.details.location}
										</Typography>
										<Typography variant="body2">
											<strong>Opening Hours:</strong>{" "}
											{selected.details.openingHours}
										</Typography>
										<Typography variant="body2">
											<strong>Entrance Fee:</strong>{" "}
											{selected.details.entranceFee}
										</Typography>
										<Typography variant="body2">
											<strong>Exhibitions:</strong>
										</Typography>
										<ul>
											{selected.details.exhibitions.map((exhibition, index) => (
												<li key={index}>
													<Typography variant="body2">{exhibition}</Typography>
												</li>
											))}
										</ul>
										<Typography variant="body2">
											<strong>Visitor Experience:</strong>
										</Typography>
										<ul>
											{selected.details.visitorExperience.map(
												(experience, index) => (
													<li key={index}>
														<Typography variant="body2">
															{experience}
														</Typography>
													</li>
												)
											)}
										</ul>
										<Typography variant="body2">
											<strong>Booking and Guidelines:</strong>
										</Typography>
										<ul>
											{selected.details.bookingAndGuidelines.map(
												(guideline, index) => (
													<li key={index}>
														<Typography variant="body2">{guideline}</Typography>
													</li>
												)
											)}
										</ul>
										<Typography variant="body2">
											<strong>Accessibility:</strong>{" "}
											{selected.details.accessibility}
										</Typography>
										<Button
											onClick={() => setShowDetails(false)}
											variant="contained"
											color="primary"
										>
											Show Less
										</Button>
									</Box>
								) : (
									<Button
										onClick={() => setShowDetails(true)}
										variant="contained"
										color="primary"
									>
										More Info
									</Button>
								)}
							</InfoWindowContainer>
						</InfoWindow>
					)}
				</GoogleMap>
			</Box>
		</div>
	);
};

export default Map;
