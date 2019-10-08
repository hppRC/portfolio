interface Page {
	context: { frontmatter: object };
}

interface PageContext {
	frontmatter: object;
}

export const safelyGetFmKey = (
	pageContext: PageContext,
	key: string
): string | null =>
	safelyGetFrontMatter(pageContext)
		? safelyGetFrontMatter(pageContext)[key]
		: null;

export const safelyGetFrontMatter = (pageContext: PageContext): any =>
	pageContext && pageContext.frontmatter ? pageContext.frontmatter : {};

// General, consider moving
export const withFallback = (value: any, fallback: any) =>
	value ? value : fallback;

export const safelyGetSiteConfig = (page: Page): object =>
	page && page.context ? safelyGetFrontMatter(page.context) : {};
