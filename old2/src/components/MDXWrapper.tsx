import React from "react"
import { MDXProvider } from "@mdx-js/react"
import * as REBASS from "rebass"

const GlobalScopeComponents = {
  ...REBASS,
}

// export a MDXWrapper component, which will pass these components into the child mdx posts
export const MDXWrapper = ({ children }) => {
  return (
    <MDXProvider components={{ ...GlobalScopeComponents }}>
      {children}
    </MDXProvider>
  )
}
