import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx {
            edges {
              node {
                fields {
                  route
                }
                frontmatter {
                  title
                  author
                  date
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div>
            <h1>Page Index</h1>
            <div>
              {data.allMdx.edges.map((edge, index) => {
                const {
                  node: {
                    fields: { route },
                    frontmatter: { title, author, date, tags },
                  },
                } = edge

                return (
                  <div key={index}>
                    <Link to={route}>{title}</Link>
                    <ul>
                      <li>{author}</li>
                      <li>{date}</li>
                      <li>{tags}</li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }}
    />
  )
}
