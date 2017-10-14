import React from 'react'
import propTypes from 'prop-types'

const Screen = ({ store }) =>
  (<div style={{
    position: 'fixed',
    bottom: 0,
    left: 0,
  }}
  >
    {JSON.stringify(store, null, 2)}
  </div>)

Screen.propTypes = {
  store: propTypes.shape({}),
}

Screen.defaultProps = {
  store: {},
}

export default Screen
