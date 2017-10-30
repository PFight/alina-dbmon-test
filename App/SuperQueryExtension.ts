import { Alina } from "./Imports";

export class SuperQuery extends Alina.Renderer {
  constructor(nodesOrBindings: Node[] | Alina.NodeBinding[], parent: Alina.Renderer) {
    super(nodesOrBindings, parent);
  }

  superQuery(selector: string): Alina.ISingleNodeRenderer {
    return this.query(selector);
  }
}

export function SuperExt(renderer: Alina.ISingleNodeRenderer): SuperQuery {
  return new SuperQuery([renderer.binding], renderer as any);
}