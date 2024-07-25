import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAttractions = () => {
	const [attractions, setAttractions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAttractions = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_ATTRACTIONS_API_URL}/attractions`
				);
				setAttractions(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchAttractions();
	}, []);

	return { attractions, loading, error };
};

export default useFetchAttractions;
