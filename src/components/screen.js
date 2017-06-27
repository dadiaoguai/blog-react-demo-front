import React from 'react'

const Screen = ({store}) =>
  <div style={{
    position: 'fixed',
    bottom: 0,
    left: 0
  }}>
    {JSON.stringify(store, null, 2)}
  </div>

export default Screen