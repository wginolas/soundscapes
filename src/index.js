import { el, mount } from "redom";
import audioSrc from "../media/Brahmsee/01.opus";

class Audio {
    constructor(src) {
        this.el = el("audio", {controls:true},
                     this.source = el("source", {
                         src,
                         type:"audio/ogg"}));
        this.data = {};
    }

    update(data) {
        const {src} = data;

        if (src != this.data.src) {
            this.source.setAttribute("src", src);
        }

        this.data = data;
    }
}

const audio = new Audio(audioSrc);
//audio.update({src: audioSrc});
mount(document.body, audio);
