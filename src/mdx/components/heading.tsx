import React from 'react';

export const h1 = (props: any) => <h1 style={{ color: 'tomato' }} {...props} />;
export const h2 = (props: any) => <h2 style={{ color: 'green' }} {...props} />;
export const h3 = (props: any) => (
	<h3 style={{ color: '#27301d' }} {...props} />
);
export const pre = (props: any) => <div {...props} />;
export const code = (props: any) => (
	<pre style={{ backgroundColor: '#f3528f' }} {...props} />
);
