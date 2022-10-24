import React, { useState, useEffect } from "react";

type Post ={
	id: number
	title: string
}

export default function ApiFetch() {
	const [posts, setPosts] = useState<Post[]>([]);

	// 型の宣言方法がわからない
	// process.env.REACT_APP_BACKEND_URL

	useEffect(() => {
		fetch('localhost:5000', {method: 'GET'})
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