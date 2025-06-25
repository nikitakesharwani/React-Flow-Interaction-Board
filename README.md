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

## Installation

```bash
git clone https://github.com/your-username/react-flow-board.git
cd react-flow-board
npm install
npm start
```

## Usage

- Launch the app
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

## Deployment

Deployed on GitHub Pages.
