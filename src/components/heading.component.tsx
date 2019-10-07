import React from 'react';

interface Props {
	tag: number;
	children?: any;
}

export const Heading = ({ tag, children }: Props) => {
	const Htag: any = `h${tag}`;
	return <Htag style={{ color: 'rebeccapurple' }}>{children}</Htag>;
};

export default Heading;
