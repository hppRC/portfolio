import React from 'react';
import Layout from '../layouts';

interface Props {}

export const About: React.FC<Props> = () => (
	<Layout>
		<h1>My Wonderful Website About</h1>
		<p>This is the about page.</p>
	</Layout>
);

export default About;
