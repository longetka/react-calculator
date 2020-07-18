import React from 'react'
import './styles/Calculate.scss'

export default (props) => {
  return(
      <p className="calcItem">{props.name}: {props.cost}</p>
  )
}