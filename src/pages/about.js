import React from 'react'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

import Layout from '../components/Layout'

const text = css`
  ${tw`text-black text-md`};
`

function About() {
  return (
    <React.Fragment>
      <Layout>
        <h1
          css={css`
            ${tw`text-black font-bold`};
          `}
        >
          About Me
        </h1>
        <p css={text}>
          My name is Matt Hagner, and I am a self taught developer. I fell in
          love with programming on accident while figuring out how to automate
          switching printers at work. I'll be attending Lambda School starting
          in February of 2019, and even though I'm attending their 1 year part
          time program, my goal is to be hired by the end of the year.
        </p>
        <p css={text}>
          My passion is in front end development, but I also like things like:
          ReasonML, GraphQL, TypeScript, anything functional-programming.
        </p>
      </Layout>
    </React.Fragment>
  )
}

export default About
