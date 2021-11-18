"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const planck_1 = require("planck");
const const_1 = require("../const");
const Point_1 = require("../Point");
/**
 * A class to define a shape via user defined coordinates.
 *
 * @class
 * @memberof PIXI
 */
class Polygon extends planck_1.Polygon {
    /**
     * @param {PIXI.IPointData[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    constructor(...points) {
        super(Array.isArray(points[0]) ? points[0] : points);
        let flat = Array.isArray(points[0]) ? points[0] : points;
        // if this is an array of points, convert it to a flat array of numbers
        if (typeof flat[0] !== 'number') {
            const p = [];
            for (let i = 0, il = flat.length; i < il; i++) {
                p.push(flat[i].x, flat[i].y);
            }
            flat = p;
        }
        /**
         * An array of the points of this polygon
         *
         * @member {number[]}
         */
        this.points = flat;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        this.type = const_1.SHAPES.POLY;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean}
         * @default true
         */
        this.closeStroke = true;
    }
    /**
     * Creates a clone of this polygon
     *
     * @return {PIXI.Polygon} a copy of the polygon
     */
    clone() {
        const points = this.points.slice();
        const polygon = new Polygon(points);
        polygon.closeStroke = this.closeStroke;
        return polygon;
    }
    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */
    contains(x, y) {
        let inside = false;
        // use some raycasting to test hits
        // https://github.com/substack/point-in-polygon/blob/master/index.js
        const length = this.points.length / 2;
        for (let i = 0, j = length - 1; i < length; j = i++) {
            const xi = this.points[i * 2];
            const yi = this.points[(i * 2) + 1];
            const xj = this.points[j * 2];
            const yj = this.points[(j * 2) + 1];
            const intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * ((y - yi) / (yj - yi))) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        return inside;
    }
    getPoints() {
        return Array(this.points.length / 2).fill(null).map((_, index) => {
            return new Point_1.Point(this.points[index * 2], this.points[index * 2 + 1]);
        });
    }
    sub(value = Point_1.Point.zero()) {
        const points = this.getPoints().map((point) => point.sub(value));
        return new Polygon(points);
    }
    rotate(angle) {
        return new Polygon(this.getPoints().map((point) => point.rotate(angle)));
    }
    translate(offset) {
        return new Polygon(this.getPoints().map((point) => point.add(offset)));
    }
    transform({ a, b, c, d, tx, ty }) {
        return new Polygon(this.getPoints().map(({ x, y }) => {
            return new Point_1.Point(x * a + y * c + tx, x * b + y * d + ty);
        }));
    }
    scale(scale) {
        return new Polygon(this.getPoints().map((point) => point.mult(scale)));
    }
    flip() {
        return new Polygon(this.getPoints().map(({ x, y }) => new Point_1.Point(y, x)));
    }
}
exports.Polygon = Polygon;
Polygon.from = (input) => {
    const points = input.m_vertices.map((vec) => Point_1.Point.from(vec));
    return new Polygon(points);
};
//# sourceMappingURL=Polygon.js.map