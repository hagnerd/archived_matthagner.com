import React from 'react'
import tw from 'tailwind.macro'
import Image from 'gatsby-image'
import { StaticQuery, Link, graphql } from 'gatsby'
import { animated, useSpring } from 'react-spring/hooks'
import { css } from '@emotion/core'

const NavLink = ({ to, children }) => (
  <li
    css={css`
      ${tw`mr-6 capitalize`};
    `}
  >
    <Link
      to={to}
      css={css`
        transition: color 200ms ease-in-out;
        ${tw`text-base shadow-none font-sans font-semibold text-grey-darker hover:text-black uppercase`};
      `}
    >
      {children}
    </Link>
  </li>
)

function Navigation() {
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
            ${tw`w-full mt-10 mb-0`};
          `}
          style={styles}
        >
          <nav
            css={css`
              ${tw`flex items-center py-4 justify-center`};
            `}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={data.author}
              css={css`
                ${tw`mr-12 mb-0 h-4 w-4 rounded-full shadow-inner`};
                min-width: 50px;
              `}
            />
            <h3
              css={css`
                ${tw`text-grey-darkest font-serif my-auto`};
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
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
        fixed(width: 70, height: 70) {
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
