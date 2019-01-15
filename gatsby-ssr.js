import React from 'react'
import Navigation from './src/components/navigation'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap
export const wrapPageElement = ({ element }) => (
  <React.Fragment>
    <Navigation />
    {element}
  </React.Fragment>
)
