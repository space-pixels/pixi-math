import { Vec2 } from 'planck';
import type { IPoint } from './IPoint';
import type { IPointData } from './IPointData';
import { ObservablePoint } from './ObservablePoint';
export interface Point extends GlobalMixins.Point, IPoint {
}
/**
 * The Point object represents a location in a two-dimensional coordinate system, where `x` represents
 * the position on the horizontal axis and `y` represents the position on the vertical axis
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
export declare class Point extends Vec2 implements IPoint {
    static unit(): Point;
    static zero(): Point;
    static from(input?: IPointData): Point;
    static withAngle(angle: number, magnitude?: number): Point;
    /** Position of the point on the x axis */
    x: number;
    /** Position of the point on the y axis */
    y: number;
    /** Creates a new `Point`
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    constructor(x?: number, y?: number);
    /**
     * Copies `x` and `y` from the given point into this point
     *
     * @param p - The point to copy from
     * @returns The point instance itself
     */
    copyFrom(p: IPointData): this;
    /**
     * Copies this point's x and y into the given point (`p`).
     *
     * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
     * @returns The point (`p`) with values updated
     */
    copyTo<T extends IPoint>(p: T): T;
    /**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     *
     * @param p - The point to check
     * @returns Returns `true` if both `x` and `y` are equal
     */
    equals(p: IPointData): boolean;
    /**
     * Sets the point to a new `x` and `y` position.
     * If `y` is omitted, both `x` and `y` will be set to `x`.
     *
     * @param {number} [x=0] - position of the point on the `x` axis
     * @param {number} [y=x] - position of the point on the `y` axis
     * @returns The point instance itself
     */
    set<T extends Vec2>(x: number, y: number): T;
    set<T extends Vec2>(value: IPointData): T;
    add({ x, y }: Point): Point;
    sub({ x, y }: Point): Point;
    addXY(x: number, y: number): Point;
    subXY(x: number, y: number): Point;
    div(value: number): Point;
    divXY(x: number, y: number): Point;
    mult(value: number | Point): Point;
    multXY(x: number, y: number): Point;
    distanceTo({ x, y }: Point): number;
    distanceSquaredTo({ x, y }: Point): number;
    unit(): Point;
    rotate(angle: number): Point;
    angle(): number;
    angleTo({ x, y }: Point): number;
    directionTo(target: Point): number;
    interpolate({ x, y }: Point, frac: number): Point;
    floor(): this;
    ceil(): this;
    round(): this;
    export(): {
        x: number;
        y: number;
    };
    apply(target: ObservablePoint): void;
}
export interface Point {
    clone(): Point;
}
