import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap, Handle } from 'react-flow-renderer'
import Sidebar from './Sidebar';
import Styled from './styled'
import { widgets } from './widgets';

function App() {
  const [elements, setElements] = useState([])
  const [selectedWidget, toggleSelectedWidget] = useState(null)
  const [name, setName] = useState("")

  const getWidgetById = widgetId => widgets.find(({ id }) => id === widgetId)

  const onLoad = (ReactFlowInstance) => {
    ReactFlowInstance.fitView()
  }

  const handleWidgetClick = (widgetId) => {
    toggleSelectedWidget(getWidgetById(widgetId))
  }

  const handlePanelChange = data => {

    toggleSelectedWidget(element => ({ ...element, data }))
  }

  const addNode = (widgetId, widget, x, y) => setElements(elements => [
    ...elements,
    {
      id: `${widget.id}${elements.length + 1}`,
      data: { label: widget.widget(widget.data, () => handleWidgetClick(widgetId)) },
      position: { x, y }
    }
  ])

  const onConnect = (params) => setElements(e => addEdge(params, e))

  return (
    <Styled.Wrapper>


      <Sidebar>
        {selectedWidget ? (
          <>
            {selectedWidget.panel(selectedWidget?.data, (data) => handlePanelChange(data))}
          </>
        ) : (
            <>
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
            </>
          )}
      </Sidebar>
      <div
        onDrop={(event) => {
          const widgetId = event.dataTransfer.getData('tayronin-do-arrasta');
          addNode(widgetId, getWidgetById(widgetId), event.clientX, event.clientY)
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
          onPaneClick={() => toggleSelectedWidget(null)}
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
    </Styled.Wrapper >
  );
}

export default App;
