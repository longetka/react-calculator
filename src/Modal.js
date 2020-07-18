import React from 'react'
import './styles/modal.scss'

export default (props) => {
  return (
    <div className="modal" style={{display: props.visible}}>
      <div className="modal__container">
        <span
          onClick={props.handlerClick}
          title="Закрыть"
          className="modal__close"
        >
        </span>
        {props.children}
      </div>
    </div>
  )
}
