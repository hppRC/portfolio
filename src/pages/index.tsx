import React from 'react';
import { Layout } from '../layouts';
import AllPosts from '../components/AllPosts';

export const Index: React.FC<{}> = () => (
	<Layout>
		<h1>Gatsby Tutorial Home Page</h1>
		<AllPosts />
	</Layout>
);

export default Index;
