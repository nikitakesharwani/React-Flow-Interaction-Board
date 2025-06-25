import React, { useCallback, useRef, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { Sidebar } from "./Sidebar";

export function Canvas() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const reactFlowWrapper = useRef(null);

  // Allow drop
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // add a new node
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const data = event.dataTransfer.getData("application/reactflow");
      if (!data) return;
      const block = JSON.parse(data);
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };
      const newNode = {
        id: `${block.id || Math.random()}`,
        type: "default",
        position,
        data: { label: block.label || block.name || "Node" },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  // right-click on a node
  const onNodeContextMenu = useCallback((event, node) => {
    event.preventDefault(); // Prevent default context menu
    setNodes((nds) =>
      nds.map((n) =>
        n.id === node.id
          ? { ...n, data: { ...n.data, label: "hello world" } }
          : n
      )
    );
  }, []);

  // Allow only one edge from A to B, not B to A
  const onConnect = useCallback(
    (params) => {
      // Find nodes by id
      const sourceNode = nodes.find((n) => n.id === params.source);
      const targetNode = nodes.find((n) => n.id === params.target);

      if (!sourceNode || !targetNode) {
        alert("Both source and target nodes must exist.");
        return;
      }

      // Only allow edge from A to B (not B to A)
      if (
        sourceNode.data.label === "Block A" &&
        targetNode.data.label === "Block B"
      ) {
        // Prevent duplicate edge
        const exists = edges.some(
          (e) => e.source === params.source && e.target === params.target
        );
        if (!exists) {
          setEdges((eds) =>
            eds.concat({ ...params, id: `${params.source}-${params.target}` })
          );
          alert("Success");
        } else {
          alert("Failed: connection only from A to B");
        }
      } else {
        alert("Failed: connection only from A to B");
      }
    },
    [nodes, edges]
  );

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Sidebar />
      <div
        ref={reactFlowWrapper}
        style={{
          flex: 1,
          height: "100vh",
          margin: "50px",
          border: "2px solid black",
          borderRadius: "50px",
          position: "relative",
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeContextMenu={onNodeContextMenu}
          onConnect={onConnect}
        />
      </div>
    </div>
  );
}
