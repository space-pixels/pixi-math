import { Polygon as PlanckPolygon } from 'planck';
import { SHAPES } from '../const';
import type { IPointData } from '../IPointData';
import { Matrix } from '../Matrix';
import { Point } from '../Point';
/**
 * A class to define a shape via user defined coordinates.
 *
 * @class
 * @memberof PIXI
 */
export declare class Polygon extends PlanckPolygon {
    static from: (input: PlanckPolygon) => Polygon;
    points: number[];
    closeStroke: boolean;
    readonly type: SHAPES.POLY;
    constructor(points: IPointData[] | number[]);
    constructor(...points: IPointData[] | number[]);
    /**
     * Creates a clone of this polygon
     *
     * @return {PIXI.Polygon} a copy of the polygon
     */
    clone(): Polygon;
    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */
    contains(x: number, y: number): boolean;
    getPoints(): Point[];
    sub(value?: Point): Polygon;
    rotate(angle: number): Polygon;
    translate(offset: Point): Polygon;
    transform({ a, b, c, d, tx, ty }: Matrix): Polygon;
    scale(scale: number): Polygon;
    flip(): Polygon;
}
