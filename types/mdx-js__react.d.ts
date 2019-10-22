declare module '@mdx-js/react' {
	export type Components = {
		[key: string]: unknown;
	};
	export type Scope = {
		[key: string]: unknown;
	};

	export interface MDXProviderProps {
		children: React.ReactNode;
		components: Components;
		scope: Scope;
	}

	export class MDXProvider extends React.Component<MDXProviderProps> {}
}
