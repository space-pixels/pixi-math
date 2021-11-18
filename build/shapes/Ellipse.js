"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ellipse = void 0;
const const_1 = require("../const");
const Rectangle_1 = require("./Rectangle");
/**
 * The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *
 * @memberof PIXI
 */
class Ellipse {
    /**
     * @param x - The X coordinate of the center of this ellipse
     * @param y - The Y coordinate of the center of this ellipse
     * @param halfWidth - The half width of this ellipse
     * @param halfHeight - The half height of this ellipse
     */
    constructor(x = 0, y = 0, halfWidth = 0, halfHeight = 0) {
        this.x = x;
        this.y = y;
        this.width = halfWidth;
        this.height = halfHeight;
        this.type = const_1.SHAPES.ELIP;
    }
    /**
     * Creates a clone of this Ellipse instance
     *
     * @return {PIXI.Ellipse} A copy of the ellipse
     */
    clone() {
        return new Ellipse(this.x, this.y, this.width, this.height);
    }
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @return Whether the x/y coords are within this ellipse
     */
    contains(x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        // normalize the coords to an ellipse with center 0,0
        let normx = ((x - this.x) / this.width);
        let normy = ((y - this.y) / this.height);
        normx *= normx;
        normy *= normy;
        return (normx + normy <= 1);
    }
    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     *
     * @return The framing rectangle
     */
    getBounds() {
        return new Rectangle_1.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
    }
}
exports.Ellipse = Ellipse;
//# sourceMappingURL=Ellipse.js.map