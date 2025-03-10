// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter as Router } from "react-router-dom";

Amplify.configure(awsconfig);

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
