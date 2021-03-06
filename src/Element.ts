import { Node } from "./Node";

export class Element extends Node {
  className: string;
  children: Array<any>;

  constructor() {
    super();

    this.className = "";
    this.children = [];
  }

  setAttribute(name, value) {
    this[name] = value;
  }

  getAttribute(name) {
    return this[name];
  }

  setAttributeNS(name, value) {
    this[name] = value;
  }

  getAttributeNS(name) {
    return this[name];
  }
}
