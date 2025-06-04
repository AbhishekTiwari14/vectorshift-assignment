// llmNode.js

import { Handle, Position } from "reactflow"
import { AbstractionNode } from "./AbstractionNode"

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-response`,
    },
  ]

  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-system`}
    //     style={{top: `${100/3}%`}}
    //   />
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-prompt`}
    //     style={{top: `${200/3}%`}}
    //   />
    //   <div>
    //     <span>LLM</span>
    //   </div>
    //   <div>
    //     <span>This is a LLM.</span>
    //   </div>
    //   <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-response`}
    //   />
    // </div>

    <AbstractionNode
      id={id}
      data={data}
      title="LLM"
      handles={handles}
      style={{ borderColor: "#8b5cf6" }}
    >
      <div style={{ fontSize: "12px", color: "#6b7280", textAlign: "center" }}>
        This is a LLM node for processing text with AI.
      </div>
    </AbstractionNode>
  )
}
