import React, { useState, useEffect } from "react";

export default function ApiFetch() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_BACKEND_URL, {method: 'GET'})
		.then(res => res.json())
		.then(data => {
			setPosts(data)
		})
	}, [])


	return (
		<div>
			<ul>
				{posts.map(post => <li key={post.id}>{post.title}</li>)}
			</ul>
		</div>
	);
}