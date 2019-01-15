import React from 'react'
import tw from 'tailwind.macro'
import Image from 'gatsby-image'
import { StaticQuery, Link, graphql } from 'gatsby'
import { animated, useSpring } from 'react-spring/hooks'
import { css } from '@emotion/core'

const list = css`
  ${tw`mr-3 capitalize`};
`

const navLink = css`
  ${tw`text-sm font-semibold text-grey-darker hover:text-black`};
`

function Navigation({ author, avatar, title }) {
  const styles = useSpring({
    native: true,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <StaticQuery
      query={navQuery}
      render={data => (
        <animated.header
          css={css`
            ${tw`w-full`};
          `}
          style={styles}
        >
          <nav
            css={css`
              ${tw`w-4/5 mx-auto flex items-center py-4`};
            `}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={data.author}
              css={css`
                ${tw`mr-3 mb-0 rounded-full`};
                min-width: 50px;
              `}
            />
            <h3
              css={css`
                ${tw`text-black my-auto`};
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
            <ul
              css={css`
                ${tw`flex ml-auto items-center my-auto `};
                list-style: none;
              `}
            >
              <li css={list}>
                <Link to="/" css={navLink}>
                  Home
                </Link>
              </li>
              <li css={list}>
                <Link to="/about" css={navLink}>
                  About
                </Link>
              </li>
              <li css={list}>
                <Link to="/blog" css={navLink}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </animated.header>
      )}
    />
  )
}

const navQuery = graphql`
  query navQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

export default Navigation
