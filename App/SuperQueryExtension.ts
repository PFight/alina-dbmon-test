import { Alina } from "./Imports";

export interface SuperQuery {
  superQuery(selector: string): this;
}

export function SuperExt<T extends Alina.Alina>(renderer: T): T & SuperQuery {
  let result = renderer as T & SuperQuery;
  result.superQuery = superQuery;
  return result;
}

function superQuery(this: Alina.Alina, selector: string): any {
  return this.query(selector);
};