import React from 'react'
import tw from 'tailwind.macro'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            css={css`
              ${tw`flex mt-10 mb-20 justify-center max-w-md`};
            `}
          >
            <p
              css={css`
                ${tw`mx-auto text-justify font-serif text-lg font-medium`};
              `}
            >
              Written by <strong>{author}</strong> who lives and works in
              Minneapolis building silly things.
              {` `}
              <a
                css={css`
                  ${tw`text-blue hover:text-blue-dark`};
                `}
                href={`https://twitter.com/${social.twitter}`}
              >
                You should follow him on Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
