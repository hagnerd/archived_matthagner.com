import React from 'react'
import { useTrail, animated, config } from 'react-spring/hooks'

function Trail({ children, delay = 0 }) {
  const styles = useTrail(React.Children.count(children), {
    native: true,
    config: config.stiff,
    delay: delay,
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0, 50px, 0)',
    },
  })

  return React.Children.toArray(children).map((element, index) => (
    <animated.div key={index} style={styles[index]}>
      {element}
    </animated.div>
  ))
}

export default Trail
