import React, { useState, useEffect } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const ProfilePage = ({ user }) => {
	const [profile, setProfile] = useState({
		username: user.username,
		email: "",
		phone: "",
		address: "",
	});

	useEffect(() => {
		// Fetch user profile from your API
		const fetchUserProfile = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_PROFILE_API_URL}/profile`,
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${user.userId}`, // Use userId or other identifier
						},
					}
				);
				const data = response.data;
				setProfile({
					...profile,
					email: data.email || "",
					phone: data.phone || "",
					address: data.address || "",
				});
			} catch (error) {
				console.error("Error fetching user profile:", error);
			}
		};

		fetchUserProfile();
	}, [user.username]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProfile({ ...profile, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`${process.env.REACT_APP_PROFILE_API_URL}/profile`,
				profile,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user.userId}`,
					},
				}
			);
			const data = response.data;
			setProfile({
				...profile,
				email: data.email || "",
				phone: data.phone || "",
				address: data.address || "",
			});
			alert("Profile updated successfully!");
		} catch (error) {
			console.error("Error updating profile:", error);
		}
	};

	return (
		<Container>
			<Box sx={{ mt: 4 }}>
				<Box sx={{ paddingTop: "80px" }}></Box>
				<Typography variant="h4">Profile</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						label="Username"
						value={profile.username}
						name="username"
						onChange={handleInputChange}
						fullWidth
						margin="normal"
						disabled
					/>
					<TextField
						label="Email"
						value={profile.email}
						name="email"
						onChange={handleInputChange}
						fullWidth
						margin="normal"
					/>
					<TextField
						label="Phone"
						value={profile.phone}
						name="phone"
						onChange={handleInputChange}
						fullWidth
						margin="normal"
					/>
					<TextField
						label="Address"
						value={profile.address}
						name="address"
						onChange={handleInputChange}
						fullWidth
						margin="normal"
					/>
					<Button type="submit" variant="contained" color="primary">
						Update Profile
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default ProfilePage;
