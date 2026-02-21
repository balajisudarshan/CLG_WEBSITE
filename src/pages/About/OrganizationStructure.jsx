import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";

const nodes = [

  // MAIN VERTICAL CHAIN
  {
    id: "1",
    position: { x: 430, y: 0 },
    data: { label: "Chairman (Governing Body)" },
    style: { background: "#facc15", padding: 10, fontWeight: "bold" }
  },
  {
    id: "2",
    position: { x: 450, y: 120 },
    data: { label: "Correspondent" },
    style: { background: "#1e3a8a", color: "white", padding: 10 }
  },
  {
    id: "3",
    position: { x: 450, y: 240 },
    data: { label: "Director" },
    style: { background: "#0284c7", color: "white", padding: 10 }
  },
  {
    id: "4",
    position: { x: 450, y: 360 },
    data: { label: "Heads of Department" },
    style: { background: "#f97316", color: "white", padding: 10 }
  },
  {
    id: "5",
    position: { x: 450, y: 480 },
    data: { label: "Faculty" },
    style: { background: "#dc2626", color: "white", padding: 10 }
  },
  {
    id: "6",
    position: { x: 450, y: 600 },
    data: { label: "Supporting Staff" },
    style: { background: "#16a34a", color: "white", padding: 10 }
  },

  // LEFT SIDE (DIRECTOR)
  { id: "ac", position: { x: 80, y: 260 }, data: { label: "Academic Council" }, style: { background: "#3b82f6", color: "white", padding: 8 } },
  { id: "bos", position: { x: 80, y: 320 }, data: { label: "Board of Studies" }, style: { background: "#3b82f6", color: "white", padding: 8 } },
  { id: "finance", position: { x: 80, y: 380 }, data: { label: "Finance Committee" }, style: { background: "#3b82f6", color: "white", padding: 8 } },
  { id: "coe", position: { x: 80, y: 440 }, data: { label: "Controller of Examinations" }, style: { background: "#3b82f6", color: "white", padding: 8 } },
  { id: "tp", position: { x: 80, y: 520 }, data: { label: "Training & Placement" }, style: { background: "#3b82f6", color: "white", padding: 8 } },
  { id: "cl", position: { x: 80, y: 580 }, data: { label: "College Librarian" }, style: { background: "#3b82f6", color: "white", padding: 8 } },
  { id: "cw", position: { x: 80, y: 640 }, data: { label: "Chief Warden" }, style: { background: "#3b82f6", color: "white", padding: 8 } },

  // CHIEF WARDEN CHILDREN
  { id: "manag", position: { x: 40, y: 720 }, data: { label: "Manager" }, style: { background: "#16a34a", color: "white", padding: 6, width: 100, textAlign:"center"} },
  { id: "war", position: { x: 170, y: 720 }, data: { label: "Wardens" }, style: { background: "#16a34a", color: "white", padding: 6, width: 100, textAlign:"center"} },

  // RIGHT SIDE (HOD)
  { id: "iqac", position: { x: 800, y: 360 }, data: { label: "IQAC" }, style: { background: "#facc15", padding: 8 } },
  { id: "ao", position: { x: 800, y: 420 }, data: { label: "Administrative Officer" }, style: { background: "#facc15", padding: 8 } },
  { id: "pe", position: { x: 800, y: 480 }, data: { label: "Project Engineer (Civil Infrastructure)" }, style: { background: "#facc15", padding: 8 } },
  { id: "ncc", position: { x: 800, y: 540 }, data: { label: "NCC" }, style: { background: "#22c55e", padding: 8 } },
  { id: "nss", position: { x: 800, y: 600 }, data: { label: "NSS" }, style: { background: "#22c55e", padding: 8 } },
  { id: "gc", position: { x: 800, y: 660 }, data: { label: "Grievance Cell" }, style: { background: "#3b82f6", color:"white", padding: 8 } },
  { id: "men", position: { x: 760, y: 740 }, data: { label: "Men" }, style: { background: "#16a34a", color:"white", padding: 6, width: 80, textAlign:"center"} },
  { id: "women", position: { x: 900, y: 740 }, data: { label: "Women" }, style: { background: "#16a34a", color:"white", padding: 6, width: 80, textAlign:"center"} },

];

const edges = [

  // vertical chain
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },

  // director left
  { id: "e3-ac", source: "3", target: "ac", type: "smoothstep" },
  { id: "e3-bos", source: "3", target: "bos", type: "smoothstep" },
  { id: "e3-fin", source: "3", target: "finance", type: "smoothstep" },
  { id: "e3-coe", source: "3", target: "coe", type: "smoothstep" },
  { id: "e3-tp", source: "3", target: "tp", type: "smoothstep" },
  { id: "e3-cl", source: "3", target: "cl", type: "smoothstep" },
  { id: "e3-cw", source: "3", target: "cw", type: "smoothstep" },

  // chief warden children
  { id: "e-cw-manag", source: "cw", target: "manag", type: "smoothstep" },
  { id: "e-cw-war", source: "cw", target: "war", type: "smoothstep" },

  // hod right
  { id: "e4-iqac", source: "4", target: "iqac", type: "smoothstep" },
  { id: "e4-ao", source: "4", target: "ao", type: "smoothstep" },
  { id: "e4-pe", source: "4", target: "pe", type: "smoothstep" },
  { id: "e4-ncc", source: "4", target: "ncc", type: "smoothstep" },
  { id: "e4-nss", source: "4", target: "nss", type: "smoothstep" },
  { id: "e4-gc", source: "4", target: "gc", type: "smoothstep" },

  // grievance cell children
  { id: "e-gc-men", source: "gc", target: "men", type: "smoothstep" },
  { id: "e-gc-women", source: "gc", target: "women", type: "smoothstep" },

];

const OrganizationStructure = () => {
  return (
    <div style={{ width: "100%", height: "85vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default OrganizationStructure;