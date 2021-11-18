"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
const Matrix_1 = require("./Matrix");
const ObservablePoint_1 = require("./ObservablePoint");
/**
 * Transform that takes care about its versions.
 *
 * @memberof PIXI
 */
class Transform {
    constructor() {
        this.worldTransform = new Matrix_1.Matrix();
        this.localTransform = new Matrix_1.Matrix();
        this.position = new ObservablePoint_1.ObservablePoint(this.onChange, this, 0, 0);
        this.scale = new ObservablePoint_1.ObservablePoint(this.onChange, this, 1, 1);
        this.pivot = new ObservablePoint_1.ObservablePoint(this.onChange, this, 0, 0);
        this.skew = new ObservablePoint_1.ObservablePoint(this.updateSkew, this, 0, 0);
        this._rotation = 0;
        this._cx = 1;
        this._sx = 0;
        this._cy = 0;
        this._sy = 1;
        this._localID = 0;
        this._currentLocalID = 0;
        this._worldID = 0;
        this._parentID = 0;
    }
    /** Called when a value changes. */
    onChange() {
        this._localID++;
    }
    /** Called when the skew or the rotation changes. */
    updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew.y);
        this._sx = Math.sin(this._rotation + this.skew.y);
        this._cy = -Math.sin(this._rotation - this.skew.x); // cos, added PI/2
        this._sy = Math.cos(this._rotation - this.skew.x); // sin, added PI/2
        this._localID++;
    }
    /** Updates the local transformation matrix. */
    updateLocalTransform() {
        const lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale.x;
            lt.b = this._sx * this.scale.x;
            lt.c = this._cy * this.scale.y;
            lt.d = this._sy * this.scale.y;
            lt.tx = this.position.x - ((this.pivot.x * lt.a) + (this.pivot.y * lt.c));
            lt.ty = this.position.y - ((this.pivot.x * lt.b) + (this.pivot.y * lt.d));
            this._currentLocalID = this._localID;
            // force an update..
            this._parentID = -1;
        }
    }
    /**
     * Updates the local and the world transformation matrices.
     *
     * @param parentTransform - The parent transform
     */
    updateTransform(parentTransform) {
        const lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale.x;
            lt.b = this._sx * this.scale.x;
            lt.c = this._cy * this.scale.y;
            lt.d = this._sy * this.scale.y;
            lt.tx = this.position.x - ((this.pivot.x * lt.a) + (this.pivot.y * lt.c));
            lt.ty = this.position.y - ((this.pivot.x * lt.b) + (this.pivot.y * lt.d));
            this._currentLocalID = this._localID;
            // force an update..
            this._parentID = -1;
        }
        if (this._parentID !== parentTransform._worldID) {
            // concat the parent matrix with the objects transform.
            const pt = parentTransform.worldTransform;
            const wt = this.worldTransform;
            wt.a = (lt.a * pt.a) + (lt.b * pt.c);
            wt.b = (lt.a * pt.b) + (lt.b * pt.d);
            wt.c = (lt.c * pt.a) + (lt.d * pt.c);
            wt.d = (lt.c * pt.b) + (lt.d * pt.d);
            wt.tx = (lt.tx * pt.a) + (lt.ty * pt.c) + pt.tx;
            wt.ty = (lt.tx * pt.b) + (lt.ty * pt.d) + pt.ty;
            this._parentID = parentTransform._worldID;
            // update the id of the transform..
            this._worldID++;
        }
    }
    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param matrix - The matrix to decompose
     */
    setFromMatrix(matrix) {
        matrix.decompose(this);
        this._localID++;
    }
    /** The rotation of the object in radians. */
    get rotation() {
        return this._rotation;
    }
    set rotation(value) {
        if (this._rotation !== value) {
            this._rotation = value;
            this.updateSkew();
        }
    }
}
exports.Transform = Transform;
/** A default (identity) transform. */
Transform.IDENTITY = new Transform();
//# sourceMappingURL=Transform.js.map