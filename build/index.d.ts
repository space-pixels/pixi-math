import { Circle } from './shapes/Circle';
import { Ellipse } from './shapes/Ellipse';
import { Polygon } from './shapes/Polygon';
import { Rectangle } from './shapes/Rectangle';
import { RoundedRectangle } from './shapes/RoundedRectangle';
export * from './const';
export * from './groupD8';
export * from './IPoint';
export * from './IPointData';
export * from './Matrix';
export * from './ObservablePoint';
export * from './Point';
export * from './Transform';
export * from './util';
export { Circle };
export { Ellipse };
export { Polygon };
export { Rectangle };
export { RoundedRectangle };
export declare type IShape = Circle | Ellipse | Polygon | Rectangle | RoundedRectangle;
export interface ISize {
    width: number;
    height: number;
}
