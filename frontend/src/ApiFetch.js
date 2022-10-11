import React, { useState, useEffect } from "react";

export default function ApiFetch() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://5000-reoyabiku-jphacks2022b2-lnszc5vtb6o.ws-us70.gitpod.io/', {method: 'GET'})
		.then(res => {
			setPosts(res);
			console.log("-------------------------------------");
			console.log(res);
		})
	}, [])


	return (
		<div>
			<ul>
				{posts.map((post, i) => <li key={i}>{post}</li>)}
			</ul>
		</div>
	);
}