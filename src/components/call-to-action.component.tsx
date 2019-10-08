import React from 'react';
import { SmartLink } from './smart-link.component';

interface Props {
	url: string;
	align?: string;
	bgColor?: string;
}

export const CallToAction: React.FC<Props> = ({
	url,
	children,
	align,
	bgColor,
	...other
}) => {
	const link = (
		<SmartLink to={url} {...other}>
			{children}
		</SmartLink>
	);

	return align === 'center' ? (
		<span
			style={{
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'red'
			}}
		>
			{link}
		</span>
	) : (
		link
	);
};
