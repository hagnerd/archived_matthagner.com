import React from 'react'
import tw from 'tailwind.macro'
import { useSpring, config, animated } from 'react-spring/hooks'
import { css } from '@emotion/core'

import { rhythm, scale } from '../utils/typography'

const link = css`
  ${tw`m-2`}
`

function Layout({ children }) {
  const styles = useSpring({
    native: true,
    config: config.stiff,
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0, 100px, 0)',
    },
  })

  return (
    <animated.div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        ...styles,
      }}
    >
      {children}
      <footer
        css={css`
          ${tw`text-center my-20 text-sm font-semibold font-serif`};
        `}
      >
        <div
          css={css`
            ${tw`flex justify-center`}
          `}
        >
          <a css={link} href="https://github.com/hagnerd">
            Github
          </a>
          <a css={link} href="https://twitter.com/_hagnerd">
            Twitter
          </a>
        </div>
        <p>© {new Date().getFullYear()} Matt Hagner</p>
      </footer>
    </animated.div>
  )
}

export default Layout
