import { Node, Edge } from 'reactflow';

export interface MindMapNode extends Node {
  style: {
    light: string;
    dark: string;
  };
  data: {
    label: string;
    content?: string;
  };
}

export interface MindMapEdge extends Edge {
  style: {
    light: string;
    dark: string;
  };
}

export interface MindMap {
  interactive: boolean;
  title: string;
  nodes: MindMapNode[];
  edges: MindMapEdge[];
}