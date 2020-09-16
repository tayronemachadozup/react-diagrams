import React, { useState } from 'react'
import { Handle } from 'react-flow-renderer'

const Conditional = ({ data }) => {
  const [isPanelOpen, togglePanel] = useState(false)

  return (
    <>
      <h3>Financiamento sem risco</h3>
      <div className="content">
        <p>data</p>
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
    </>
  )
}

const ConditionalPanel = () => {
  const [oua, setOua] = useState('')

  return (
    <>
      Condition Panel
      <input type="text" onChange={event => setOua(event.target.event)} value={oua} />
    </>
  )

}

Conditional.Panel = ConditionalPanel

export default Conditional