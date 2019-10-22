import React from 'react';

export const Test: React.FC<{}> = () => (
	<h1>
		Test. This is <span style={{ color: 'tomato' }}>Test</span>
	</h1>
);

export const Demo: React.FC<{}> = () => <h1>This is a demo component</h1>;

export const LayoutTest: React.FC<{}> = ({ children }) => (
	<div style={{ border: 'medium solid #ff00ff', backgroundColor: '#8888ff' }}>
		<div style={{ backgroundColor: '#88ff88' }}>Test Layout Header</div>
		<div style={{ padding: '10px 20px' }}>{children}</div>
		<div style={{ backgroundColor: '#ff8888' }}>Test Layout Footer</div>
	</div>
);
