declare module 'gatsby-plugin-mdx';

interface ParallaxLayerProps {
	className?: string;
}

declare module '*.mdx' {
	let MDXComponent: (props: any) => JSX.Element;
	export default MDXComponent;
}
