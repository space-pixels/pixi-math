import { SHAPES } from '../const';
import { Point } from '../Point';
export interface Rectangle extends GlobalMixins.Rectangle {
}
/**
 * Size object, contains width and height
 *
 * @memberof PIXI
 * @typedef {object} ISize
 * @property {number} width - Width component
 * @property {number} height - Height component
 */
/**
 * Rectangle object is an area defined by its position, as indicated by its top-left corner
 * point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 */
export declare class Rectangle {
    static from: ({ x, y }: Point, width: number, height: number) => Rectangle;
    x: number;
    y: number;
    width: number;
    height: number;
    readonly type: SHAPES.RECT;
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
     * @param {number} [width=0] - The overall width of this rectangle
     * @param {number} [height=0] - The overall height of this rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * returns the left edge of the rectangle
     *
     * @member {number}
     */
    get left(): number;
    /**
     * returns the right edge of the rectangle
     *
     * @member {number}
     */
    get right(): number;
    /**
     * returns the top edge of the rectangle
     *
     * @member {number}
     */
    get top(): number;
    /**
     * returns the bottom edge of the rectangle
     *
     * @member {number}
     */
    get bottom(): number;
    /**
     * A constant empty rectangle.
     *
     * @static
     * @constant
     * @member {PIXI.Rectangle}
     * @return {PIXI.Rectangle} An empty rectangle
     */
    static get EMPTY(): Rectangle;
    /**
     * Creates a clone of this Rectangle
     *
     * @return {PIXI.Rectangle} a copy of the rectangle
     */
    clone(): Rectangle;
    /**
     * Copies another rectangle to this one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy from.
     * @return {PIXI.Rectangle} Returns itself.
     */
    copyFrom(rectangle: Rectangle): Rectangle;
    /**
     * Copies this rectangle to another one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy to.
     * @return {PIXI.Rectangle} Returns given parameter.
     */
    copyTo(rectangle: Rectangle): Rectangle;
    /**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rectangle
     */
    contains(x: number, y: number): boolean;
    /**
     * Pads the rectangle making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     *
     * @param {number} [paddingX=0] - The horizontal padding amount.
     * @param {number} [paddingY=0] - The vertical padding amount.
     * @return {PIXI.Rectangle} Returns itself.
     */
    pad(paddingX?: number, paddingY?: number): this;
    /**
     * Fits this rectangle around the passed one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
     * @return {PIXI.Rectangle} Returns itself.
     */
    fit(rectangle: Rectangle): this;
    /**
     * Enlarges rectangle that way its corners lie on grid
     *
     * @param {number} [resolution=1] - resolution
     * @param {number} [eps=0.001] - precision
     * @return {PIXI.Rectangle} Returns itself.
     */
    ceil(resolution?: number, eps?: number): this;
    /**
     * Enlarges this rectangle to include the passed rectangle.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to include.
     * @return {PIXI.Rectangle} Returns itself.
     */
    enlarge(rectangle: Rectangle): this;
    translate({ x, y }: Point): Rectangle;
    translateXY(x: number, y: number): Rectangle;
    rotate(angle: number): Rectangle;
    start(): Point;
    end(inclusive?: boolean): Point;
    center(): Point;
    size(): Point;
    area(): number;
    getSides(bounds: Rectangle): [Rectangle, Rectangle, Rectangle, Rectangle];
}
