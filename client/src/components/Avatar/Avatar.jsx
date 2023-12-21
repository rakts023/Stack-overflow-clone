import React from 'react'

const Avatar = ({children, backgroundColor, padding, color, borderRadius, fontSize, cursor}) => {
  const style = {
    backgroundColor,
    padding,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor : cursor || null
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
