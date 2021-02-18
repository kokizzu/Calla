import type { progressCallback } from "../tasks/progressCallback";
import type { BufferAndContentType } from "./BufferAndContentType";
import type { IFetcher } from "./IFetcher";
export declare class Fetcher implements IFetcher {
    protected normalizeOnProgress(headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): progressCallback | undefined;
    protected normalizeHeaderMap(headerMap?: Map<string, string> | progressCallback): Map<string, string> | undefined;
    private getResponse;
    private postObjectForResponse;
    private readRequestResponse;
    private readResponseBuffer;
    protected _getBuffer(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<BufferAndContentType>;
    getBuffer(path: string): Promise<BufferAndContentType>;
    getBuffer(path: string, onProgress?: progressCallback): Promise<BufferAndContentType>;
    getBuffer(path: string, headerMap?: Map<string, string>): Promise<BufferAndContentType>;
    getBuffer(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<BufferAndContentType>;
    protected _postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<BufferAndContentType>;
    postObjectForBuffer<T>(path: string, obj: T): Promise<BufferAndContentType>;
    postObjectForBuffer<T>(path: string, obj: T, onProgress?: progressCallback): Promise<BufferAndContentType>;
    postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<BufferAndContentType>;
    postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<BufferAndContentType>;
    protected _getBlob(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<Blob>;
    getBlob(path: string): Promise<Blob>;
    getBlob(path: string, onProgress?: progressCallback): Promise<Blob>;
    getBlob(path: string, headerMap?: Map<string, string>): Promise<Blob>;
    getBlob(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<Blob>;
    protected _postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, onProgress?: progressCallback): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<Blob>;
    protected _getFile(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<string>;
    getFile(path: string): Promise<string>;
    getFile(path: string, onProgress?: progressCallback): Promise<string>;
    getFile(path: string, headerMap?: Map<string, string>): Promise<string>;
    getFile(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    protected _postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<string>;
    postObjectForFile<T>(path: string, obj: T): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, onProgress?: progressCallback): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    private readBufferText;
    protected _getText(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<string>;
    getText(path: string): Promise<string>;
    getText(path: string, onProgress?: progressCallback): Promise<string>;
    getText(path: string, headerMap?: Map<string, string>): Promise<string>;
    getText(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    private _postObjectForText;
    postObjectForText<T>(path: string, obj: T): Promise<string>;
    postObjectForText<T>(path: string, obj: T, onProgress?: progressCallback): Promise<string>;
    postObjectForText<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<string>;
    postObjectForText<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    private setDefaultAcceptType;
    protected _getObject<T>(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<T>;
    getObject<T>(path: string): Promise<T>;
    getObject<T>(path: string, onProgress?: progressCallback): Promise<T>;
    getObject<T>(path: string, headerMap?: Map<string, string>): Promise<T>;
    getObject<T>(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<T>;
    protected _postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, onProgress?: progressCallback): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string>): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<U>;
    postObject<T>(path: string, obj: T): Promise<void>;
    postObject<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<void>;
    postObject<T>(path: string, obj: T, onProgress?: progressCallback): Promise<void>;
    postObject<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<void>;
    private readTextXml;
    protected _getXml(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<HTMLElement>;
    getXml(path: string): Promise<HTMLElement>;
    getXml(path: string, onProgress?: progressCallback): Promise<HTMLElement>;
    getXml(path: string, headerMap?: Map<string, string>): Promise<HTMLElement>;
    getXml(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, onProgress?: progressCallback): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLElement>;
    loadScript(path: string, test: () => boolean, onProgress?: progressCallback): Promise<void>;
    getWASM<T>(path: string, imports: Record<string, Record<string, WebAssembly.ImportValue>>, onProgress?: progressCallback): Promise<T>;
}
