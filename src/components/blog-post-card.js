import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { animated } from 'react-spring/hooks'

import { rhythm } from '../utils/typography'

const card = css`
  ${tw`max-w-md rounded overflow-hidden shadow-md my-6 px-6`};
`

const cardTitle = css`
  ${tw`font-bold text-xl mb-2`};
`

const titleLink = css`
  ${tw`text-blue shadow-none hover:text-blue-dark`};
`

const date = css`
  ${tw`text-grey-darker`};
`

const cardExcerpt = css`
  ${tw`text-grey-darkest text-base`};
`

function BlogPostCard({ post: { excerpt, fields, frontmatter }, style }) {
  const title = frontmatter.title || fields.slug
  return (
    <animated.div css={card} style={style}>
      <h3 css={cardTitle}>
        <Link css={titleLink} to={fields.slug}>
          {title}
        </Link>
      </h3>
      <small css={date}>{frontmatter.date}</small>
      <p css={cardExcerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
    </animated.div>
  )
}

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
}

export const query = graphql`
  fragment BlogPostCard on Mdx {
    excerpt
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
`

export default BlogPostCard
