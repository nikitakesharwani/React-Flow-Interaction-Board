import "reactflow/dist/style.css";
import blocks from "../Data/blocks.json";

export function Sidebar() {
  const nodeBlocks = blocks.slice(0, 2);

  // Set drag data when dragging starts
  const onDragStart = (event, block) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(block));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      style={{
        width: "250px",
        height: "80vh",
        backgroundColor: "#f8f8f8",
        border: "1px solid #ccc",
        borderRadius: "50px",
        padding: "16px",
        overflowY: "auto",
        margin: "50px 0 50px 50px",
      }}
    >
      <h4>Drag a block to the canvas:</h4>
      {nodeBlocks.map((block, idx) => (
        <div
          key={block.id || idx}
          style={{
            margin: "12px 0",
            padding: "12px",
            background: "#fff",
            border: "1px solid #bbb",
            borderRadius: "8px",
            cursor: "grab",
            textAlign: "center",
          }}
          draggable
          onDragStart={(event) => onDragStart(event, block)}
        >
          {block.label || block.name || `Block ${idx + 1}`}
        </div>
      ))}
    </div>
  );
}
