# React Flow Interaction Board

This project is a frontend developer task that demonstrates the use of React Flow to create a drag-and-drop UI canvas. Users can move blocks from a side panel and establish specific connections.

## Features

- Drag and drop blocks from the right sidebar into the canvas.
- Allow connections only from `Block A` to `Block B`.
- Disallow invalid connections (e.g., `Block B` to `Block A`).
- Right-click on a block to open a custom context menu displaying "Hello World".

## Technologies Used

- React
- React Flow
- React Hooks

## Usage

- Launch the app using VS Code (npm start) or you can use [Click here to view the project on GitHub Pages](https://nikitakesharwani.github.io/React-Flow-Interaction-Board/)
- Drag blocks from the sidebar to the canvas
- Connect Block A ➝ Block B
- Right-click any block to see "Hello World"

## Folder Structure

```
src/
│
├── components/
│   ├── Sidebar.js
│   ├── Canvas.js
│
├── data/
│   └── blocks.json
│
├── App.js
└── index.js
```

## API Simulation

```json
[
  { "id": "1", "type": "blockA", "label": "Block A" },
  { "id": "2", "type": "blockB", "label": "Block B" }
]
```

---

## Solution Summary

This project implements a **React Flow**-based interactive canvas with a custom sidebar for block management and drag-and-drop node creation. The main features include:

- **Custom Sidebar**:  
  The sidebar displays draggable blocks (Block A and Block B) sourced from `blocks.json`. Users can drag these blocks onto the canvas to create nodes.

- **Drag-and-Drop Node Creation**:  
  The canvas accepts drops from the sidebar. When a block is dropped, a new node is created at the drop position with the correct label and type.

- **Node Interaction**:  
  - **Right-click** on any node changes its label to `"hello world"`.

- **Edge Connection Logic**:  
  - Only allows edges from **Block A** to **Block B**.
  - Duplicate edges and reverse connections (B to A) are prevented.
  - Alerts:
    - **Success**: Only shown when a valid A→B connection is made for the first time.
    - **Failed**: Shown for all invalid or duplicate connections, with the message:  
      `"Failed: connection only from A to B"`

---

## Design Decisions & Notes

- **No Use of CustomNode Component**:  
  The `CustomNode` component is not used. The sidebar uses simple styled `<div>`s for clarity and ease of drag-and-drop.

- **Node Type**:  
  All nodes are created with the `"default"` type to ensure they are draggable and compatible with React Flow’s built-in features.

- **Edge Validation**:  
  The `onConnect` callback strictly enforces the A→B connection rule, using node labels for identification. This logic is easy to adapt if more block types are added.

- **State Management**:  
  - Nodes and edges are managed with React’s `useState` hooks.
  - The canvas and sidebar are siblings in a flex layout, ensuring drag-and-drop works reliably.

- **User Feedback**:  
  - Alerts are used for error and success feedback.  
  - For production, consider replacing alerts with a toast/notification system for better UX.

- **Extensibility**:  
  The design allows for easy addition of more block types, custom node rendering, or more complex edge rules in the future.

---

## File Structure Reference

- `src/Components/Sidebar.js`: Custom sidebar with draggable blocks.
- `src/Components/Canvas.js`: Main canvas with React Flow, drop logic, and edge validation.
- `src/Data/blocks.json`: Source of available blocks.

---

## How to Use

1. Drag a block from the sidebar to the canvas to create a node.
2. Right-click a node to change its label to `"hello world"`.
3. Connect nodes: Only Block A → Block B is allowed; all other connections will show an error.

---

##