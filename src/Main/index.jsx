import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap, Handle } from 'react-flow-renderer'
import Sidebar from './Sidebar';
import Styled from './styled'
import { widgets } from './widgets';

function App() {
  const [elements, setElements] = useState([])
  const [selectedWidget, toggleSelectedWidget] = useState(null)
  const [name, setName] = useState("")

  const onLoad = (ReactFlowInstance) => {
    ReactFlowInstance.fitView()
  }

  const addNode = () => {
    setElements(e => e.concat({
      id: (e.length + 1).toString(),
      data: { label: `${name}` },
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
    }))
  }

  const onConnect = (params) => setElements(e => addEdge(params, e))

  return (
    <Styled.Wrapper>
      <Sidebar>
        {widgets.map(widget => (
          <div
            key={widget.id}
            color={widget.color}
            draggable={true}
            onDragStart={(event) => {
              event.dataTransfer.setData('tayronin-do-arrasta', widget.id);
            }}
          >
            {widget.name}
          </div>
        ))}
      </Sidebar>
      <div
        onDrop={(event) => {
          const widgetId = event.dataTransfer.getData('tayronin-do-arrasta');
          const currentWidget = widgets.find(({ id }) => id === widgetId)

          setElements(elements => [
            ...elements,
            {
              id: `${currentWidget.id}${elements.length + 1}`,
              data: { label: currentWidget.widget() },
              position: { x: event.clientX, y: event.clientY }
            }
          ])
        }}
        onDragOver={event => event.preventDefault()}
      >
        <ReactFlow
          elements={elements}
          onLoad={onLoad}
          onConnect={onConnect}
          connectionLineStyle={{ stroke: "#addd", strokeWidth: 2 }}
          connectionLineType="belizer"
          snapToGrid={true}
          snapGrid={[16, 16]}
          style={{ width: '100%', height: '100vh', background: '#1c1c1e' }}
          onElementClick={event => console.log(event.target)}
        >
          <Background gap={16} />
          <MiniMap
            nodeColor={n => {
              if (n.type === 'input') return 'blue'
              return '#ffcc00'

            }} />
          <Controls />
        </ReactFlow>
      </div>
    </Styled.Wrapper>
  );
}

export default App;
