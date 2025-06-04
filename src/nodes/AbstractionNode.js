//abstractionNode.js: abstraction for nodes

import { Handle, Position } from "reactflow"

export const AbstractionNode = ({
  id,
  data,
  title,
  children,
  handles = [],
  width = 200,
  height = 80,
  style = {},
}) => {
  const defaultStyle = {
    width,
    height,
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    padding: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    ...style,
  }

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#374151",
    marginBottom: "8px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "4px",
  }

  return (
    <div style={defaultStyle}>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style || {}}
        />
      ))}

      {title && <div style={titleStyle}>{title}</div>}

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {children}
      </div>
    </div>
  )
}
