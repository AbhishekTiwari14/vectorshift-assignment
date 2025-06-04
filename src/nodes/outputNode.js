// outputNode.js

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { AbstractionNode } from "./AbstractionNode"

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  )
  const [outputType, setOutputType] = useState(data.outputType || "Text")

  const handleNameChange = (e) => {
    setCurrName(e.target.value)
  }

  const handleTypeChange = (e) => {
    setOutputType(e.target.value)
  }

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-value`,
    },
  ]

  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-value`}
    //   />
    //   <div>
    //     <span>Output</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         value={currName}
    //         onChange={handleNameChange}
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={outputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">Image</option>
    //       </select>
    //     </label>
    //   </div>
    // </div>

    <AbstractionNode
      id={id}
      data={data}
      title="Output"
      handles={handles}
      style={{ borderColor: "#ef4444" }}
    >
      <label
        style={{ display: "flex", flexDirection: "column", fontSize: "12px" }}
      >
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          style={{
            marginTop: "2px",
            padding: "4px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        />
      </label>
      <label
        style={{ display: "flex", flexDirection: "column", fontSize: "12px" }}
      >
        Type:
        <select
          value={outputType}
          onChange={handleTypeChange}
          style={{
            marginTop: "2px",
            padding: "4px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </AbstractionNode>
  )
}
