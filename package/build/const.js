"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHAPES = exports.DEG_TO_RAD = exports.RAD_TO_DEG = exports.PI_2 = void 0;
/**
 * Two Pi.
 *
 * @static
 * @member {number}
 * @memberof PIXI
 */
exports.PI_2 = Math.PI * 2;
/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @member {number} RAD_TO_DEG
 * @memberof PIXI
 */
exports.RAD_TO_DEG = 180 / Math.PI;
/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @member {number}
 * @memberof PIXI
 */
exports.DEG_TO_RAD = Math.PI / 180;
/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @memberof PIXI
 * @enum {number}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 */
var SHAPES;
(function (SHAPES) {
    SHAPES[SHAPES["POLY"] = 0] = "POLY";
    SHAPES[SHAPES["RECT"] = 1] = "RECT";
    SHAPES[SHAPES["CIRC"] = 2] = "CIRC";
    SHAPES[SHAPES["ELIP"] = 3] = "ELIP";
    SHAPES[SHAPES["RREC"] = 4] = "RREC";
})(SHAPES = exports.SHAPES || (exports.SHAPES = {}));
//# sourceMappingURL=const.js.map