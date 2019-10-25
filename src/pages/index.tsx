import React from 'react';
import { Layout } from '../layouts';
import Posts from '../components/Posts';

export const Index: React.FC<{}> = () => (
	<Layout>
		<h1>Gatsby Tutorial Home Page</h1>
		<Posts />
	</Layout>
);

export default Index;
