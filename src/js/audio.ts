import leftfoot from '../audio/left-foot.m4a?url';
import lefthand from '../audio/left-hand.m4a?url';
import rightfoot from '../audio/right-foot.m4a?url';
import righthand from '../audio/right-hand.m4a?url';

import on from '../audio/on.m4a?url';

import blue from '../audio/blue.m4a?url';
import green from '../audio/green.m4a?url';
import red from '../audio/red.m4a?url';
import purple from '../audio/purple.m4a?url';

/** Object with audio instances. */
export const sounds: looseObject = {
    'leftfoot': new Audio(leftfoot),
    'lefthand': new Audio(lefthand),
    'rightfoot': new Audio(rightfoot),
    'righthand': new Audio(righthand),

    'on': new Audio(on),

    'blue': new Audio(blue),
    'green': new Audio(green),
    'red': new Audio(red),
    'purple': new Audio(purple),
};

sounds.on.volume = 0.5;

export const preload = () => {
    for (const sound in sounds) {
        sounds[sound].muted = 'muted';
        sounds[sound].play();
        sounds[sound].onended = () => {
            sounds[sound].muted = null;
            sounds[sound].onended = null;
        }
    }
};