import React from 'react'

function Box(prop) {
  return (
    <div className="box" style={{"background": prop.color, "height": "100px", "width": "100px"}}></div>
  )
}

export default Box
