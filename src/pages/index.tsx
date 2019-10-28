import React from 'react';
import { Layout } from '../layouts';
import AllPosts from '../components/AllPosts';
import { useAllTags, useSiteBuildTime, useSiteMetadata } from '../hooks';

export const Index: React.FC<{}> = () => (
	<Layout>
		<h1>Gatsby Tutorial Home Page</h1>
		<AllPosts />
		{console.log(useAllTags())}
		{console.log(useSiteBuildTime())}
		{console.log(useSiteMetadata())}
	</Layout>
);

export default Index;
