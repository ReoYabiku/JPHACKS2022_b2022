import React, { useState, useEffect } from "react";

export default function ApiFetch() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000', {method: 'GET'})
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