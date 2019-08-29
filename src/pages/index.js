import React from 'react'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Trail from '../components/trail'

const text = css`
  ${tw`text-black font-serif text-lg`}
`

function About() {
  return (
    <React.Fragment>
      <Layout>
        <h1
          css={css`
            ${tw`font-sans text-grey-darkest text-4xl`};
          `}
        >
          About Me
        </h1>
        <Trail delay={200}>
          <p css={text}>
            My name is Matt Hagner, and I am a front end developer currently
            working at SDG, a consultancy in Minnesota, and attending Lambda's
            full-stack development bootcamp on nights and weekends.
          </p>
          <p css={text}>
            When I'm not programming I love to travel with my fiancee, drink
            craft beer, and cook.
          </p>
        </Trail>
      </Layout>
    </React.Fragment>
  )
}

export default About
