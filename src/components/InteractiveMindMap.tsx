import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  addEdge,
  Node
} from 'reactflow';
import 'reactflow/dist/style.css';
import { MindMap } from '../modules/mindmaps/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface InteractiveMindMapProps {
  isDarkMode: boolean;
  mindMap: MindMap;
}

const InteractiveMindMap: React.FC<InteractiveMindMapProps> = ({ isDarkMode, mindMap }) => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  if (!mindMap?.nodes || !mindMap?.edges) {
    return null;
  }

  const initialNodes = mindMap.nodes.map(node => ({
    ...node,
    className: `p-4 rounded-lg shadow-lg ${isDarkMode ? node.style.dark : node.style.light}`,
  }));

  const initialEdges = mindMap.edges.map(edge => ({
    ...edge,
    style: { stroke: isDarkMode ? edge.style.dark : edge.style.light }
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };

  return (
    <div className="relative w-full h-[600px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        connectionMode={ConnectionMode.Loose}
        fitView
        attributionPosition="bottom-right"
      >
        <Background 
          color={isDarkMode ? '#374151' : '#e5e7eb'} 
          gap={16} 
          size={1}
        />
        <Controls />
      </ReactFlow>

      <AnimatePresence>
        {selectedNode && selectedNode.data.content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`absolute top-4 right-4 w-80 p-4 rounded-lg shadow-xl ${
              isDarkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">{selectedNode.data.label}</h3>
              <button
                onClick={() => setSelectedNode(null)}
                className={`p-1 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {selectedNode.data.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveMindMap;