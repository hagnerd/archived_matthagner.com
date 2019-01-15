// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import React from 'react'
import Navigation from './src/components/navigation'

import { wrapRootElement as wrap } from './wrap-root-element'
import { setConfig } from 'react-hot-loader'
setConfig({ pureSFC: true })

export const wrapRootElement = wrap

export const wrapPageElement = ({ element }) => {
  return (
    <React.Fragment>
      <Navigation />
      {element}
    </React.Fragment>
  )
}
