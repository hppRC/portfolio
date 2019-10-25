import React from 'react';
import { Layout } from '../layouts';
import AllPosts from '../components/AllPosts';

const PostsPage: React.FC<{}> = () => (
	<Layout>
		<AllPosts />
	</Layout>
);

export default PostsPage;
