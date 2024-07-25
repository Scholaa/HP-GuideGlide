// import React from "react";
// import {
// 	Authenticator,
// 	ThemeProvider,
// 	defaultTheme,
// } from "@aws-amplify/ui-react";
// import { Box, Typography, Container } from "@mui/material";
// import "@aws-amplify/ui-react/styles.css";

// const CustomTheme = {
// 	name: "custom-theme",
// 	tokens: {
// 		colors: {
// 			brand: {
// 				primary: {
// 					10: "#ffffff",
// 					20: "#f5f5f5",
// 					40: "#cccccc",
// 					60: "#999999",
// 					80: "#666666",
// 					90: "#333333",
// 					100: "#000000",
// 				},
// 			},
// 		},
// 		radii: {
// 			small: "5px",
// 			medium: "8px",
// 			large: "12px",
// 		},
// 	},
// };

// const CustomAuthenticator = () => (
// 	<ThemeProvider theme={CustomTheme}>
// 		<Authenticator>
// 			{({ signOut, user }) => (
// 				<Container>
// 					<Box textAlign="center" mt={5}>
// 						<Typography variant="h4">Welcome, {user.username}</Typography>
// 						<Box mt={2}>
// 							<button onClick={signOut}>Sign out</button>
// 						</Box>
// 					</Box>
// 				</Container>
// 			)}
// 		</Authenticator>
// 	</ThemeProvider>
// );

// export default CustomAuthenticator;


import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import App from "../App";
import "@aws-amplify/ui-react/styles.css";

const CustomAuthenticator = () => (
	<Authenticator>
		{({ signOut, user }) => <App signOut={signOut} user={user} />}
	</Authenticator>
);

export default CustomAuthenticator;

