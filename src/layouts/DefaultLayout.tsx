import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { Box, Flex } from "rebass"
import { Link, graphql } from "gatsby"
import { Sans, Serif } from "components/ui/Typography"
import { NavTree } from "components/NavTree"
import { UIComponents } from "../Theme"

export default function DocsLayout(props) {
  const {
    data: {
      mdx: {
        body,
        frontmatter: { title },
      },
    },
  } = props

  return (
    <Flex>
      <Box mr="20px">
        <Box mb="20px">
          <Link to="/">
            <Sans>Home</Sans>
          </Link>
        </Box>
        <NavTree />
      </Box>
      <Box p={2}>
        <Serif size="8">{title}</Serif>
        <MDXProvider components={{ ...UIComponents }}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </Flex>
  )
}

/**
 * Query for data for the page. Note that $id is injected in via context from
 * actions.createPage. See gatsby-node.js for more info.
 */
export const pageQuery = graphql`
  query DocsLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
