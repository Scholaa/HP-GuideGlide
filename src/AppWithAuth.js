import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import App from "./App";
import "@aws-amplify/ui-react/styles.css";

const AppWithAuth = () => (
	<Authenticator>
		{({ signOut, user }) => <App signOut={signOut} user={user} />}
	</Authenticator>
);

export default AppWithAuth;
