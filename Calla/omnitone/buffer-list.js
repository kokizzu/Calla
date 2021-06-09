/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getArrayBufferFromBase64String } from "./utils";
/**
 * @file Streamlined AudioBuffer loader.
 */
/**
 * Buffer data type for ENUM.
 */
export var BufferDataType;
(function (BufferDataType) {
    /** The data contains Base64-encoded string.. */
    BufferDataType["BASE64"] = "base64";
    /** The data is a URL for audio file. */
    BufferDataType["URL"] = "url";
})(BufferDataType || (BufferDataType = {}));
;
/**
 * BufferList object mananges the async loading/decoding of multiple
 * AudioBuffers from multiple URLs.
 */
export class BufferList {
    _context;
    _options;
    _bufferData;
    /**
     * BufferList object mananges the async loading/decoding of multiple
     * AudioBuffers from multiple URLs.
     * @param context - Associated BaseAudioContext.
     * @param bufferData - An ordered list of URLs.
     * @param options - Options.
     */
    constructor(context, bufferData, options) {
        this._context = context;
        this._options = Object.assign({}, {
            dataType: BufferDataType.BASE64,
            verbose: false,
        }, options);
        this._bufferData = this._options.dataType === BufferDataType.BASE64
            ? bufferData
            : bufferData.slice(0);
    }
    /**
     * Starts AudioBuffer loading tasks.
     */
    async load() {
        try {
            const tasks = this._bufferData.map(async (bData) => {
                try {
                    return await this._launchAsyncLoadTask(bData);
                }
                catch (exp) {
                    const message = 'BufferList: error while loading "' +
                        bData + '". (' + exp.message + ')';
                    throw new Error(message);
                }
            });
            const buffers = await Promise.all(tasks);
            return buffers;
        }
        catch (exp) {
            const message = 'BufferList: error while loading ". (' + exp.message + ')';
            throw new Error(message);
        }
    }
    /**
     * Run async loading task for Base64-encoded string.
     * @param bData - Base64-encoded data.
     */
    async _launchAsyncLoadTask(bData) {
        const arrayBuffer = await this._fetch(bData);
        const audioBuffer = await this._context.decodeAudioData(arrayBuffer);
        return audioBuffer;
    }
    /**
     * Get an array buffer out of the given data.
     * @param bData - Base64-encoded data.
     */
    async _fetch(bData) {
        if (this._options.dataType === BufferDataType.BASE64) {
            return getArrayBufferFromBase64String(bData);
        }
        else {
            const response = await fetch(bData);
            return await response.arrayBuffer();
        }
    }
}
//# sourceMappingURL=buffer-list.js.map