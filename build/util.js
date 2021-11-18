"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeAngle = void 0;
function normalizeAngle(angle) {
    let result = angle;
    while (result < 0) {
        result += Math.PI * 2;
    }
    while (result >= Math.PI * 2) {
        result -= Math.PI * 2;
    }
    return result;
}
exports.normalizeAngle = normalizeAngle;
//# sourceMappingURL=util.js.map