// textNode.js

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { AbstractionNode } from "./AbstractionNode"

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}")

  const handleTextChange = (e) => {
    setCurrText(e.target.value)
  }

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ]

  return (
    // <div style={{ width: 200, height: 80, border: "1px solid black" }}>
    //   <div>
    //     <span>Text</span>
    //   </div>
    //   <div>
    //     <label>
    //       Text:
    //       <input type="text" value={currText} onChange={handleTextChange} />
    //     </label>
    //   </div>
    //   <Handle type="source" position={Position.Right} id={`${id}-output`} />
    // </div>

    <AbstractionNode
      id={id}
      data={data}
      title="Text"
      handles={handles}
      style={{ borderColor: "#3b82f6" }} 
    >
      <label
        style={{ display: "flex", flexDirection: "column", fontSize: "12px" }}
      >
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            marginTop: "2px",
            padding: "4px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        />
      </label>
    </AbstractionNode>
  )
}
