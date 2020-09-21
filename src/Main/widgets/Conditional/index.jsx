import React, { createContext, useContext, useEffect, useImperativeHandle, useReducer, useState } from 'react'
import { Handle } from 'react-flow-renderer'

const Conditional = ({ data, onClick }) => {
  const [title, setTitle] = useState()

  useImperativeHandle()

  return (
    <div onClick={() => onClick()}>
      <h3>Financiamento sem risco</h3>
      <div className="content">
        <p>{title}</p>
        <div className="cases">
          <div className="caseIf">
            <h4>If</h4>
          </div>
          <div className="caseElse">
            <h4>Else</h4>
          </div>
        </div>
      </div>
      <Handle type="source" position="right" id="a" style={{ top: 90, background: '#000' }} />
      <Handle type="source" position="right" id="b" style={{ bottom: 15, top: 'auto', background: '#000' }} />
    </div>
  )
}

const ConditionalPanel = ({ data, onChange }) => {
  const [title, setTitle] = useState(data?.title)

  useEffect(() => {

  }, [title])

  return (
    <>
      Condition Panel
      <input type="text" onChange={event => setTitle(event.target.value)} value={title} />
    </>
  )

}

Conditional.Panel = ConditionalPanel

export default Conditional