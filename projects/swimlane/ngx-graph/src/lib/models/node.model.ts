export interface NodePosition {
  x: number;
  y: number;
}

export interface NodeDimension {
  width: number;
  height: number;
}

export interface NodeData {
  color?: string;
}

export interface Node<T extends Partial<NodeData> = any> {
  id: string;
  position?: NodePosition;
  dimension?: NodeDimension;
  transform?: string;
  label?: string;
  data?: T;
  meta?: any;
}

export interface ClusterNode<T extends Partial<NodeData> = any> extends Node<T> {
  childNodeIds?: string[];
}
