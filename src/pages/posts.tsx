import React from 'react';
import { Layout } from '../layouts';
import Posts from '../components/Posts';

const PostsPage: React.FC<{}> = () => (
	<Layout>
		<Posts />
	</Layout>
);

export default PostsPage;
