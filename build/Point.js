"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const planck_1 = require("planck");
const util_1 = require("./util");
/**
 * The Point object represents a location in a two-dimensional coordinate system, where `x` represents
 * the position on the horizontal axis and `y` represents the position on the vertical axis
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
class Point extends planck_1.Vec2 {
    /** Creates a new `Point`
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    constructor(x, y) {
        super(x, y);
    }
    static unit() { return new Point(1, 0); }
    static zero() { return new Point(0, 0); }
    static from(input) { return input ? new Point(input.x, input.y) : Point.zero(); }
    static withAngle(angle, magnitude = 1) { return new Point(magnitude, 0).rotate(angle); }
    /** Creates a clone of this point
     * @returns A clone of this point
     */
    clone() {
        return new Point(this.x, this.y);
    }
    /**
     * Copies `x` and `y` from the given point into this point
     *
     * @param p - The point to copy from
     * @returns The point instance itself
     */
    copyFrom(p) {
        this.set(p.x, p.y);
        return this;
    }
    /**
     * Copies this point's x and y into the given point (`p`).
     *
     * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
     * @returns The point (`p`) with values updated
     */
    copyTo(p) {
        p.set(this.x, this.y);
        return p;
    }
    /**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     *
     * @param p - The point to check
     * @returns Returns `true` if both `x` and `y` are equal
     */
    equals(p) {
        return (p.x === this.x) && (p.y === this.y);
    }
    set(x = 0, y) {
        if (x instanceof planck_1.Vec2) {
            super.set(x);
        }
        else {
            super.set(x, y);
        }
        return this;
    }
    add({ x, y }) {
        return this.addXY(x, y);
    }
    sub({ x, y }) {
        return this.subXY(x, y);
    }
    addXY(x, y) {
        return new Point(this.x + x, this.y + y);
    }
    subXY(x, y) {
        return new Point(this.x - x, this.y - y);
    }
    div(value) {
        return this.divXY(value, value);
    }
    divXY(x, y) {
        return new Point(this.x / x, this.y / y);
    }
    mult(value) {
        return value instanceof Point
            ? this.multXY(value.x, value.y)
            : this.multXY(value, value);
    }
    multXY(x, y) {
        return new Point(this.x * x, this.y * y);
    }
    distanceTo({ x, y }) {
        return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
    }
    distanceSquaredTo({ x, y }) {
        return Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2);
    }
    unit() {
        const angle = Math.atan2(this.y, this.x);
        return Point.unit().rotate(angle);
    }
    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Point(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
    angleTo({ x, y }) {
        return Math.atan2(y - this.y, x - this.x);
    }
    directionTo(target) {
        return Math.floor(util_1.normalizeAngle(this.angleTo(target) + Math.PI / 2) / (Math.PI * 2) * 4);
    }
    interpolate({ x, y }, frac) {
        return new Point(this.x + (x - this.x) * frac, this.y + (y - this.y) * frac);
    }
    floor() {
        this.set(Math.floor(this.x), Math.floor(this.y));
        return this;
    }
    ceil() {
        this.set(Math.ceil(this.x), Math.ceil(this.y));
        return this;
    }
    round() {
        this.set(Math.round(this.x), Math.round(this.y));
        return this;
    }
    export() {
        const { x, y } = this;
        return { x, y };
    }
    apply(target) {
        target.set(this.x, this.y);
    }
}
exports.Point = Point;
//# sourceMappingURL=Point.js.map