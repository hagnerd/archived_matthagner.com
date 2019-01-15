import React from 'react'
import {
  useTrail,
  animated,
  config as reactSpringConfig,
} from 'react-spring/hooks'

function Trail({ children, delay = 0, config = reactSpringConfig.stiff }) {
  const styles = useTrail(React.Children.count(children), {
    native: true,
    delay,
    config,
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
