import React,{ useState, Fragment}from 'react'
//import ReactBrand from './../components/reactBrand.png'
//import AngularBrand from './../components/angularBrand.png'
import './../components/node.css';
import ReactFlow, {addEdge,Background, Controls, MiniMap, Handle } from 'react-flow-renderer'

const initialElements = [
  {id:'1',sourcePosition: 'bottom', type:'input', data:{label:'Seleciona oferta'}, position:{x:250,y:0}, style: { background:'#40ba8d' }},
  {id: '2' ,sourcePosition: 'top',data: {
    label: ( 
      <>
          
            <h3>Financiamento sem risco</h3>
         
          <div className="content">
            <p>Fluxo para financiamento sem necessicade de validação de fraude</p>
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
  ,},position: { x: 0, y: 100 }, style: { background: '#ffd600', width: 180 ,margin: 0 ,padding: 0 }},

  { id: '3',sourcePosition: 'left',targetPosition: 'left',data: { 
    label: (
      <>
        <h3>Efetivar proposta</h3>
        <p>GET</p>
        <p>http://localhost:8080</p>
      </>
  )
  },position: { x: 400, y: 100 }, style: { background:'#5e5e5e' }},

  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', arrowHeadType: 'arrowclosed'},
  //{ id: 'e2-3', source: '2', target: '3', type: 'smoothstep', arrowHeadType: 'arrowclosed'},
  //{ id: 'e2-4', source: '2', target: '4', type: 'smoothstep', arrowHeadType: 'arrowclosed'},
 // { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', animated: true, arrowHeadType: 'arrowclosed'},
  //{ id: 'e4-5', source: '4', target: '5', type: 'smoothstep', animated: true, arrowHeadType: 'arrowclosed'},
  

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
        <Background color="#000" gap={16} />
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