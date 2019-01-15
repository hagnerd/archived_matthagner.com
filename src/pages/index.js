import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogList from '../components/blog-list'
import Trail from '../components/trail'

function Index() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h2>This website is under construction</h2>
      <Trail delay={200}>
        <p>
          Built with: Gatsbyjs, React hooks, react-spring, emotion, Tailwindcss
        </p>
        <p>Deployed on Netlify</p>
      </Trail>
    </Layout>
  )
}

export default Index
