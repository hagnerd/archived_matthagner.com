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
            My name is Matt Hagner, and I am a self taught developer. I fell in
            love with programming on accident while figuring out how to automate
            switching printers at work. I started attending Lambda School in
            March of 2019, and even though I'm attending their 1 year part time
            program, my goal is to be hired by the end of the year.
          </p>
          <p css={text}>
            My passion is in front end development, but I also like things like:
            ReasonML/OCaml, GraphQL, TypeScript, Test Driven Development, and
            all things functional programming.
          </p>
        </Trail>
      </Layout>
    </React.Fragment>
  )
}

export default About
