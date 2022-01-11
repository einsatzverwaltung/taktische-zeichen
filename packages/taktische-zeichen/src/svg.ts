import type { Point } from "./types";

export class SVGElementFactory {
  svg() {
    return new Container("svg").attr("xmlns", "http://www.w3.org/2000/svg");
  }

  defs() {
    return new Container("defs");
  }

  g() {
    return new Container("g");
  }

  path(d: string) {
    return new Leaf("path").attr("d", d);
  }

  rect() {
    return new Leaf("rect");
  }

  circle(center: Point, radius: number | string) {
    return new Leaf("circle")
      .attr("cx", center[0])
      .attr("cy", center[1])
      .attr("r", radius);
  }

  mask(id: string) {
    return new Container("mask").attr("id", id);
  }

  use(href: string) {
    return new Leaf("use").attr("href", href);
  }
}

export abstract class Element {
  readonly attributes: Record<string, string> = {};

  constructor(readonly name: string) {}

  attr(key: string, value: string | number | undefined): this {
    if (value !== undefined) this.attributes[key] = value.toString();
    return this;
  }

  abstract render(): string;

  protected renderTag(autoClose: boolean): string {
    let tag = `<${this.name}`;
    const attributes = Object.entries(this.attributes)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
    if (attributes.length) tag += ` ${attributes}`;
    if (autoClose) tag += " /";
    tag += ">";
    return tag;
  }
}

export class Leaf extends Element {
  constructor(name: string) {
    super(name);
  }

  render() {
    return this.renderTag(true);
  }
}

export class Container extends Element {
  private children: Array<Element> = [];

  constructor(readonly name: string) {
    super(name);
  }

  push(child: Element): this {
    this.children.push(child);
    return this;
  }

  render() {
    if (!this.children.length) return this.renderTag(true);

    return (
      this.renderTag(false) +
      this.children.map((c) => c.render()).join("") +
      `</${this.name}>`
    );
  }
}