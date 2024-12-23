import p5 from "p5";

export class Koch {
  _start: p5.Vector;
  _end: p5.Vector;
  constructor(s: { x: number; y: number }, e: { x: number; y: number }) {
    this._start = p5.Vector.random2D().set(s.x, s.y);
    this._end = p5.Vector.random2D().set(e.x, e.y);
  }
  points() {
    let v = this._end.copy().sub(this._start.copy());
    v.div(3);
    let b = this._start.copy().add(v);
    let d = b.copy().add(v);
    let c = b.copy().add(v.rotate(-Math.PI / 3));
    return [this._start, b, c, d, this._end];
  }
}
