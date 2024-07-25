import React from 'react';
import AuthenticatedNavbar from "../components/AuthenticatedNavbar";

const MapPage = ({ signOut }) => {
	return (
		<div>
			<AuthenticatedNavbar signOut={signOut} />
			<h1>Map Page</h1>
			<p>Welcome to the map page.</p>
		</div>
	);
};

export default MapPage;