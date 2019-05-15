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
              ${tw`w-3/5 mx-auto flex items-center py-4`};
            `}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={data.author}
              css={css`
                ${tw`mr-12 mb-0 rounded-full`};
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
            <ul
              css={css`
                ${tw`flex ml-auto items-center my-auto `};
                list-style: none;
              `}
            >
              <NavLink to={`/`}>Home</NavLink>
              <NavLink to={`/portfolio`}>Portfolio</NavLink>
              <NavLink to={`/blog`}>Blog</NavLink>
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
