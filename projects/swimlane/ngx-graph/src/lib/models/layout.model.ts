import { Graph } from './graph.model';
import { Edge } from './edge.model';
import { Node, NodeData } from './node.model';
import { Observable } from 'rxjs';

export interface Layout {
  settings?: any;
  run<T = any, R extends Partial<NodeData> = any, V extends Partial<NodeData> = any>(
    graph: Graph<T, R, V>
  ): Graph<T, R, V> | Observable<Graph<T, R, V>>;
  updateEdge<T = any, R extends Partial<NodeData> = any, V extends Partial<NodeData> = any>(
    graph: Graph<T, R, V>,
    edge: Edge<T>
  ): Graph<T, R, V> | Observable<Graph<T, R, V>>;
  onDragStart?<R extends Partial<NodeData>>(draggingNode: Node<R>, $event: MouseEvent): void;
  onDrag?<R extends Partial<NodeData>>(draggingNode: Node<R>, $event: MouseEvent): void;
  onDragEnd?<R extends Partial<NodeData>>(draggingNode: Node<R>, $event: MouseEvent): void;
}
