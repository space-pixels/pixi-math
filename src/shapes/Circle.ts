import { Circle as PlanckCircle } from 'planck'
import { Point } from '../Point'
import { SHAPES } from './../const'
import { Rectangle } from './Rectangle'

export class Circle extends PlanckCircle {
  static withRadius(radius: number) { return new Circle(0, 0, radius) }
  static unit() { return new Circle(0, 0, 1) }

  /** @default 0 */
  public get x() { return this.getCenter().x }

  /** @default 0 */
  public get y() { return this.getCenter().y }

  /** @default 1 */
  get radius() { return this.getRadius() }

  /**
   * The type of the object, mainly used to avoid `instanceof` checks
   *
   * @default PIXI.SHAPES.CIRC
   * @see PIXI.SHAPES
   */
  public get type() { return SHAPES.CIRC }

  /**
   * @param x - The X coordinate of the center of this circle
   * @param y - The Y coordinate of the center of this circle
   * @param radius - The radius of the circle
   */
  constructor(x = 0, y = 0, radius = 0) {
    super(Point.from({ x, y }), radius)
  }

  /**
   * Creates a clone of this Circle instance
   *
   * @return A copy of the Circle
   */
  clone(): Circle {
    return new Circle(this.x, this.y, this.radius)
  }

  /**
   * Checks whether the x and y coordinates given are contained within this circle
   *
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @return Whether the x/y coordinates are within this Circle
   */
  contains(x: number, y: number): boolean {
    if (this.radius <= 0) {
      return false
    }

    const r2 = this.radius * this.radius
    let dx = (this.x - x)
    let dy = (this.y - y)

    dx *= dx
    dy *= dy

    return (dx + dy <= r2)
  }

  /**
  * Returns the framing rectangle of the circle as a Rectangle object
  *
  * @return The framing rectangle
  */
  getBounds(): Rectangle {
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
  }
}
