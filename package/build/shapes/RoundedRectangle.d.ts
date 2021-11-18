import { SHAPES } from '../const';
/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
 * top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 */
export declare class RoundedRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    readonly type: SHAPES.RREC;
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);
    /**
     * Creates a clone of this Rounded Rectangle
     *
     * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
     */
    clone(): RoundedRectangle;
    /**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
     */
    contains(x: number, y: number): boolean;
}
