import { Node, ClusterNode, NodeData } from './node.model';
import { Edge } from './edge.model';

export interface Graph<T = any, R extends Partial<NodeData> = any, V extends Partial<NodeData> = any> {
  edges: Edge<T>[];
  nodes: Node<R>[];
  clusters?: ClusterNode<V>[];
  edgeLabels?: any;
}
