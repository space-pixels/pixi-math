import { Vec2 } from 'planck'
import type { IPoint } from './IPoint'
import type { IPointData } from './IPointData'
import { ObservablePoint } from './ObservablePoint'
import { normalizeAngle } from './util'

export interface Point extends GlobalMixins.Point, IPoint { }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where `x` represents
 * the position on the horizontal axis and `y` represents the position on the vertical axis
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
export class Point extends Vec2 implements IPoint {
  static unit() { return new Point(1, 0) }
  static zero() { return new Point(0, 0) }
  static from(input?: IPointData) { return input ? new Point(input.x, input.y) : Point.zero() }
  static withAngle(angle: number, magnitude = 1) { return new Point(magnitude, 0).rotate(angle) }

  /** Position of the point on the x axis */
  public x: number
  /** Position of the point on the y axis */
  public y: number

  /** Creates a new `Point`
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(x?: number, y?: number) {
    super(x, y)
  }

  /** Creates a clone of this point
   * @returns A clone of this point
   */
  clone(): Point {
    return new Point(this.x, this.y)
  }

  /**
   * Copies `x` and `y` from the given point into this point
   *
   * @param p - The point to copy from
   * @returns The point instance itself
   */
  copyFrom(p: IPointData): this {
    this.set(p.x, p.y)
    return this
  }

  /**
   * Copies this point's x and y into the given point (`p`).
   *
   * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
   * @returns The point (`p`) with values updated
   */
  copyTo<T extends IPoint>(p: T): T {
    p.set(this.x, this.y)
    return p
  }

  /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   *
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */
  equals(p: IPointData): boolean {
    return (p.x === this.x) && (p.y === this.y)
  }

  /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   *
   * @param {number} [x=0] - position of the point on the `x` axis
   * @param {number} [y=x] - position of the point on the `y` axis
   * @returns The point instance itself
   */
  set<T extends Vec2>(x: number, y: number): T
  set<T extends Vec2>(value: IPointData): T
  set<T extends Vec2>(x: number | T = 0, y?: number): this {
    if (x instanceof Vec2) {
      super.set(x)
    } else {
      super.set(x, y)
    }
    return this
  }

  add({ x, y }: Point) {
    return this.addXY(x, y)
  }

  sub({ x, y }: Point) {
    return this.subXY(x, y)
  }

  addXY(x: number, y: number) {
    return new Point(this.x + x, this.y + y)
  }

  subXY(x: number, y: number) {
    return new Point(this.x - x, this.y - y)
  }

  div(value: number) {
    return this.divXY(value, value)
  }

  divXY(x: number, y: number) {
    return new Point(this.x / x, this.y / y)
  }

  mult(value: number | Point) {
    return value instanceof Point
      ? this.multXY(value.x, value.y)
      : this.multXY(value, value)
  }

  multXY(x: number, y: number) {
    return new Point(this.x * x, this.y * y)
  }

  distanceTo({ x, y }: Point) {
    return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2))
  }

  unit() {
    const angle = Math.atan2(this.y, this.x)
    return Point.unit().rotate(angle)
  }

  rotate(angle: number) {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return new Point(this.x * cos - this.y * sin, this.x * sin + this.y * cos)
  }

  angle() {
    return Math.atan2(this.y, this.x)
  }

  angleTo({ x, y }: Point) {
    return Math.atan2(y - this.y, x - this.x)
  }

  directionTo(target: Point) {
    return Math.floor(normalizeAngle(this.angleTo(target) + Math.PI / 2) / (Math.PI * 2) * 4)
  }

  interpolate({ x, y }: Point, frac: number) {
    return new Point(this.x + (x - this.x) * frac, this.y + (y - this.y) * frac)
  }

  floor() {
    this.set(Math.floor(this.x), Math.floor(this.y))
    return this
  }

  ceil() {
    this.set(Math.ceil(this.x), Math.ceil(this.y))
    return this
  }

  round() {
    this.set(Math.round(this.x), Math.round(this.y))
    return this
  }

  export() {
    const { x, y } = this
    return { x, y }
  }

  apply(target: ObservablePoint) {
    target.set(this.x, this.y)
  }
}

export interface Point {
  clone(): Point
}

// const p = new Point()
// p.sub()
// new Point.distance()
// new Point().normalize
