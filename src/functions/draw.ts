import p5 from "p5";
import { Koch } from "../class/korch";
import { variables } from "../common/variables";
let start = {
  x: 10,
  y: variables.h_grid / 1.1,
};
let end = {
  x: variables.w_grid - 10,
  y: variables.h_grid / 1.1,
};
let koch = new Koch(start, end);
const [a, b, c, d, e] = koch.points();
let pointsToDraw = new Set([a, b, c, d, e]);
let pointToChange = [
  new Koch(a, b),
  new Koch(b, c),
  new Koch(c, d),
  new Koch(d, e),
];
export const draw = (p: p5) => {
  let next = [];
  if (pointsToDraw.size > 550) {
    p.stroke(255)
    p.strokeWeight(1);
    p.beginShape();
    for (let point of pointsToDraw) {
      p.vertex(point.x, point.y);
    }
    p.endShape();
  } else {
    for (let segment of pointToChange) {
      let [_a, _b, _c, _d, _e] = segment.points();
      next.push(new Koch(_a, _b));
      next.push(new Koch(_b, _c));
      next.push(new Koch(_c, _d));
      next.push(new Koch(_d, _e));
      pointsToDraw.add(_a);
      pointsToDraw.add(_b);
      pointsToDraw.add(_c);
      pointsToDraw.add(_d);
      pointsToDraw.add(_e);
    }
    pointToChange = next;
    p.noFill()
  }
};
