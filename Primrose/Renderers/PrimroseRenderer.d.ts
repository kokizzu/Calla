import { Point } from "kudzu/graphics2d/Point";
import { Rectangle } from "kudzu/graphics2d/Rectangle";
import { Size } from "kudzu/graphics2d/Size";
import { CanvasTypes, Context2D } from "kudzu/html/canvas";
import { Cursor } from "../Cursor";
import { BackgroundLayer } from "../Layers/BackgroundLayer";
import { ForegroundLayer } from "../Layers/ForegroundLayer";
import { TrimLayer } from "../Layers/TrimLayer";
import { Row } from "../Row";
export interface IPrimroseRenderer {
    context: Context2D;
    fg: ForegroundLayer;
    bg: BackgroundLayer;
    trim: TrimLayer;
    character: Size;
    gridBounds: Rectangle;
    bottomRightGutter: Size;
    pointer: Point;
    scroll: Point;
    lastScrollDX: number;
    lastScrollDY: number;
    maxVerticalScroll: number;
    frontCursor: Cursor;
    backCursor: Cursor;
    rows: Row[];
    setSize(width: number, height: number, scaleFactor: number): Promise<void>;
    setFont(family: string, size: number): Promise<void>;
    render(): Promise<void>;
}
export declare class PrimroseRenderer implements IPrimroseRenderer {
    private canvas;
    context: Context2D;
    fg: ForegroundLayer;
    bg: BackgroundLayer;
    trim: TrimLayer;
    character: Size;
    gridBounds: Rectangle;
    bottomRightGutter: Size;
    pointer: Point;
    scroll: Point;
    lastScrollDX: number;
    lastScrollDY: number;
    maxVerticalScroll: number;
    frontCursor: Cursor;
    backCursor: Cursor;
    rows: Row[];
    constructor(canvas: CanvasTypes);
    setSize(width: number, height: number, scaleFactor: number): Promise<void>;
    setFont(family: string, size: number): Promise<void>;
    private get width();
    private get height();
    private scaleFactor;
    render(): Promise<void>;
}
