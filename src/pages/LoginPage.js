import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const LoginPage = () => (
	<Authenticator>
		{({ signOut, user }) => (
			<main>
				{user ? (
					<div>
						<h1>Hello, {user.username}</h1>
						<button onClick={signOut}>Sign out</button>
					</div>
				) : (
					<div>Please log in</div>
				)}
			</main>
		)}
	</Authenticator>
);

export default LoginPage;
