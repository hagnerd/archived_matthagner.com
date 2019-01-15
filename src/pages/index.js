import React from 'react'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogList from '../components/blog-list'
import Trail from '../components/trail'

const text = css`
  ${tw`text-black font-serif text-lg`}
`

function Index() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h2
        css={css`
          ${tw`font-sans text-grey-darkest text-4xl`};
        `}
      >
        This website is under construction
      </h2>
      <Trail delay={200}>
        <p css={text}>
          Built with: Gatsbyjs, React hooks, react-spring, emotion, Tailwindcss
        </p>
        <p css={text}>Deployed on Netlify</p>
      </Trail>
    </Layout>
  )
}

export default Index
