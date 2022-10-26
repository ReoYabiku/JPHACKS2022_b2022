import React, { useState, useEffect } from "react";
import { urlJoin } from "url-join-ts";

type Post ={
	id: number
	title: string
}

export default function ApiFetch() {
	const [posts, setPosts] = useState<Post[]>([]);

	
	useEffect(() => {
		// 型変更のためだけにurlJoinを使ってもいいの？
		const endpoint: string = urlJoin(process.env.REACT_APP_BACKEND_URL);
		fetch(endpoint, {method: 'GET'})
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