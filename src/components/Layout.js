import React from 'react'
import { useSpring, config, animated } from 'react-spring/hooks'

import { rhythm, scale } from '../utils/typography'

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
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </animated.div>
  )
}

export default Layout
