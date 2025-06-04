// inputNode.js: Refactored

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { AbstractionNode } from "./AbstractionNode"

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  )
  const [inputType, setInputType] = useState(data.inputType || "Text")

  const handleNameChange = (e) => {
    setCurrName(e.target.value)
  }

  const handleTypeChange = (e) => {
    setInputType(e.target.value)
  }

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-value`,
    },
  ]

  return (
    // <div style={{ width: 200, height: 80, border: "1px solid black" }}>
    //   <div>
    //     <span>Input</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input type="text" value={currName} onChange={handleNameChange} />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={inputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">File</option>
    //       </select>
    //     </label>
    //   </div>
    //   <Handle type="source" position={Position.Right} id={`${id}-value`} />
    // </div>

    <AbstractionNode
      id={id}
      data={data}
      title="Input"
      handles={handles}
      style={{ borderColor: "#10b981" }}
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
          value={inputType}
          onChange={handleTypeChange}
          style={{
            marginTop: "2px",
            padding: "4px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </AbstractionNode>
  )
}
