import React from 'react'
import { graphql } from 'gatsby'
import { useChain, useSpring, animated } from 'react-spring/hooks'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogList from '../components/blog-list'

function BlogIndex({ data: { site, allMdx }, location }) {
  const { title: siteTitle } = site.siteMetadata
  const { edges: posts } = allMdx

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <BlogList posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        post: node {
          ...BlogPostCard
        }
      }
    }
  }
`
