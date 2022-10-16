import React, { useState, useEffect } from "react";

export default function ApiFetch() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('http://integral.pythonanywhere.com', {method: 'GET'})
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
			<dev>
				{process.env.REACT_APP_BACKEND_URL}
			</dev>
		</div>
	);
}