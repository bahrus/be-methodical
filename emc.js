// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC, EventListenerOrFn} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/be-methodical/types' */;

/**
 * @type {Partial<EMC<any, AP>>}
 */
export const emc = {
    enhancedElementMatches: 'script[nomodule]',
    base: 'be-methodical',
    map: {
        '0.0':{
            instanceOf: 'String',
            mapsTo: 'ceName'
        }
    },
    enhPropKey: 'beMethodical',
    importEnh: async () => (await import('./be-methodical.js')).BeMethodical,
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);