import React,{ useState, Fragment}from 'react'

import ReactFlow, {addEdge,Background, Controls, MiniMap} from 'react-flow-renderer'

const initialElements = [
  {id:'1' ,type:'input', data:{label:'First node'}, position:{x:0,y:0}}
]

const onLoad = (ReactFlowInstance) =>{
  ReactFlowInstance.fitView()
}

const MyNode = () => {

  const [elements, setElements] = useState(initialElements)
  const [name, setName] = useState("")

  const addNode = () => {
    setElements(e=>e.concat({
      id: (e.length + 1).toString(),
      data:{label:`${name}`},
      position: {x:Math.random() * window.innerWidth,y:Math.random() * window.innerHeight}
    }))
  }

  const onConnect  = (params) => setElements(e => addEdge(params, e))

  return(
    <Fragment>
      <ReactFlow 
        elements = {elements}
        onLoad={onLoad}
        onConnect={onConnect}
        connectionLineStyle={{stroke:"#addd", strokeWidth: 2 }}
        connectionLineType="belizer"
        snapToGrid={true}
        snapGrid={[16,16]}
        style={{width:'100%',height:'90vh'}}
      >
        <Background color="#888" gap={16} />
        <MiniMap 
        nodeColor={n=>{
          if(n.type === 'input') return 'blue'
            return '#ffcc00'

        }}/>
        <Controls/>
      </ReactFlow>
        
      <div>
        <input type= "text" name="title"  onChange={e => setName(e.target.value)}/>
        
        <button type="button" onClick={addNode}>Add node</button>
      </div>
    </Fragment>
  )
}

export default MyNode