import { once } from "kudzu/events/once";
import { BaseAudioBufferSource } from "./BaseAudioBufferSource";
import { BaseEmitter } from "./spatializers/BaseEmitter";

export class AudioBufferSource extends BaseAudioBufferSource {
    public isPlaying = false;

    constructor(id: string, audioContext: BaseAudioContext, source: AudioBufferSourceNode, spatializer: BaseEmitter) {
        super(id, audioContext, source, spatializer);
    }


    async play(): Promise<void> {
        this.source.start();
        await once(this.source, "ended");
        this.isPlaying = false;
    }

    stop(): void {
        this.source.stop();
    }

    dispose() {
        this.stop();
        super.dispose();
    }
}


