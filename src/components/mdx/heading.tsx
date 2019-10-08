import React from 'react';

interface Props {
	tag: number;
}

export const Heading: React.FC<Props> = ({ tag, children }) => {
	const Htag: any = `h${tag}`;
	return <Htag>{children}</Htag>;
};

export default Heading;
