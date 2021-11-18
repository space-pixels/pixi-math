import { Circle as PlanckCircle } from 'planck';
import { SHAPES } from './../const';
import { Rectangle } from './Rectangle';
export declare class Circle extends PlanckCircle {
    static withRadius(radius: number): Circle;
    static unit(): Circle;
    /** @default 0 */
    get x(): number;
    /** @default 0 */
    get y(): number;
    /** @default 1 */
    get radius(): number;
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @default PIXI.SHAPES.CIRC
     * @see PIXI.SHAPES
     */
    get type(): SHAPES;
    /**
     * @param x - The X coordinate of the center of this circle
     * @param y - The Y coordinate of the center of this circle
     * @param radius - The radius of the circle
     */
    constructor(x?: number, y?: number, radius?: number);
    /**
     * Creates a clone of this Circle instance
     *
     * @return A copy of the Circle
     */
    clone(): Circle;
    /**
     * Checks whether the x and y coordinates given are contained within this circle
     *
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @return Whether the x/y coordinates are within this Circle
     */
    contains(x: number, y: number): boolean;
    /**
    * Returns the framing rectangle of the circle as a Rectangle object
    *
    * @return The framing rectangle
    */
    getBounds(): Rectangle;
}
