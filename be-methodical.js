// @ts-check
import { BE } from 'be-enhanced/BE.js';
import { propInfo, resolved, rejected } from 'be-enhanced/cc.js';
import { dispatchEvent as de } from 'trans-render/positractions/dispatchEvent.js';

/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AP, BAP, ObservingParameters} from './ts-refs/be-methodical/types.d.ts' */

/**
 * @implements {Actions}
 */
class BeMethodical extends BE {
    de = de;
    /**
     * @type {BEConfig<BAP, Actions & IEnhancement, any>}
     */
    static config = {
        propInfo: {
            ...propInfo,
            ceName: {},
        },
        compacts:{
            when_ceName_changes_invoke_hydrate: 0,
        },
        positractions: [resolved, rejected],
    };

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async hydrate(self){
        const {ceName, enhancedElement} = self;
        const {innerHTML} = enhancedElement;
        const ctr = (await import('trans-render/lib/hookUp.js')).hookUp(innerHTML);
        if(ctr !== undefined) {
            customElements.define(ceName, ctr);
        }
        return /** @type {PAP} */({
            resolved: true,
        });
    }
}

await BeMethodical.bootUp();
export {BeMethodical};