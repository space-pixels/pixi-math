import { Polygon as PlanckPolygon } from 'planck'
import { SHAPES } from '../const'
import type { IPointData } from '../IPointData'
import { Matrix } from '../Matrix'
import { Point } from '../Point'

/**
 * A class to define a shape via user defined coordinates.
 *
 * @class
 * @memberof PIXI
 */
export class Polygon extends PlanckPolygon {
  static from = (input: PlanckPolygon) => {
    const points = input.m_vertices.map((vec) => Point.from(vec))
    return new Polygon(points)
  }

  public points: number[]
  public closeStroke: boolean
  public readonly type: SHAPES.POLY

  constructor(points: IPointData[] | number[])
  constructor(...points: IPointData[] | number[])
  /**
   * @param {PIXI.IPointData[]|number[]} points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */
  constructor(...points: any[]) {
    super(Array.isArray(points[0]) ? points[0] : points)
    let flat: IPointData[] | number[] = Array.isArray(points[0]) ? points[0] : points

    // if this is an array of points, convert it to a flat array of numbers
    if (typeof flat[0] !== 'number') {
      const p: number[] = []

      for (let i = 0, il = flat.length; i < il; i++) {
        p.push((flat[i] as IPointData).x, (flat[i] as IPointData).y)
      }

      flat = p
    }

    /**
     * An array of the points of this polygon
     *
     * @member {number[]}
     */
    this.points = flat as number[]

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default PIXI.SHAPES.POLY
     * @see PIXI.SHAPES
     */
    this.type = SHAPES.POLY

    /**
     * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
     * @member {boolean}
     * @default true
     */
    this.closeStroke = true
  }

  /**
   * Creates a clone of this polygon
   *
   * @return {PIXI.Polygon} a copy of the polygon
   */
  clone(): Polygon {
    const points = this.points.slice()
    const polygon = new Polygon(points)
    polygon.closeStroke = this.closeStroke
    return polygon
  }

  /**
   * Checks whether the x and y coordinates passed to this function are contained within this polygon
   *
   * @param {number} x - The X coordinate of the point to test
   * @param {number} y - The Y coordinate of the point to test
   * @return {boolean} Whether the x/y coordinates are within this polygon
   */
  contains(x: number, y: number): boolean {
    let inside = false

    // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    const length = this.points.length / 2

    for (let i = 0, j = length - 1; i < length; j = i++) {
      const xi = this.points[i * 2]
      const yi = this.points[(i * 2) + 1]
      const xj = this.points[j * 2]
      const yj = this.points[(j * 2) + 1]
      const intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * ((y - yi) / (yj - yi))) + xi)

      if (intersect) {
        inside = !inside
      }
    }

    return inside
  }

  getPoints() {
    return Array(this.points.length / 2).fill(null).map((_, index) => {
      return new Point(this.points[index * 2], this.points[index * 2 + 1])
    })
  }

  sub(value: Point = Point.zero()) {
    const points = this.getPoints().map((point) => point.sub(value))
    return new Polygon(points)
  }

  rotate(angle: number) {
    return new Polygon(this.getPoints().map((point) => point.rotate(angle)))
  }

  translate(offset: Point) {
    return new Polygon(this.getPoints().map((point) => point.add(offset)))
  }

  transform({ a, b, c, d, tx, ty }: Matrix) {
    return new Polygon(this.getPoints().map(({ x, y }) => {
      return new Point(x * a + y * c + tx, x * b + y * d + ty)
    }))
  }

  scale(scale: number) {
    return new Polygon(this.getPoints().map((point) => point.mult(scale)))
  }

  flip() {
    return new Polygon(this.getPoints().map(({ x, y }) => new Point(y, x)))
  }
}
