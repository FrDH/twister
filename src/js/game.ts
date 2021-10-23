import * as helpers from './helpers';
import * as audio from './audio';
import * as config from './config';
import * as controls from './controls';

/** The game element. */
const gameElem = document.querySelector('.game');

/** The limb elements. */
const limbs = document.querySelectorAll('.limb');

/** Interval for the next step */
let nextInterval: any;

/** Last set limb. */
let currentLimb: string;

/** Last set color. */
let currentColor: string;

/** Clear out all set classes and intervals. */
const clear = () => {
    gameElem?.classList.remove('is-playing', 'is-paused');

    limbs.forEach(limb => {
        limb.classList.remove(...config.colors);
    });

    currentLimb = '';
    currentColor = '';
    
    if (nextInterval) {
        clearInterval(nextInterval);
    }
};

/** Initialize the game. */
export const init = () => {
    clear();

    controls.init();
    controls.reset();
}

/** Reset the game. */
export const reset = () => {
    clear();

    controls.reset();
};

/** Play the game. */
export const play = () => {
    clear();

    gameElem?.classList.add('is-playing');

    nextInterval = setInterval(next, config.duration);
    next();
};

/** Pause the game. */
export const pause = () => {
    clear();
    
    gameElem?.classList.add('is-paused');
};

export const next = () => {
    let newLimb = '',
        side = '',
        limb = '',
        color = '';
    
    do {
        side = helpers.random(config.sides);
        limb = helpers.random(config.limbs);
        color = helpers.random(config.colors);
        newLimb = `${side}${limb}`;
    
    } while (
        document.querySelector(`.limb--${side}.limb--${limb}`)?.classList.contains(color) || // don't set the limb to its current color
        document.querySelectorAll(`.${color}`).length > 1 || // don't use a color more than twice
        newLimb === currentLimb ||  // don't set the same limb twice in a row
        color === currentColor // don't set the same color twice in a row
    )

    currentLimb = newLimb;
    currentColor = color;

    /** The element for the new limb. */
    const newLimbElement = document.querySelector(`.limb--${side}.limb--${limb}`);

    if (newLimbElement) {
      //  Set classes to the new limb.
      newLimbElement.classList.remove(...config.colors);
      newLimbElement.classList.add(color);

      //  Play audio.
      audio.sounds[`${side}${limb}`].play();
      
      setTimeout(() => {
        audio.sounds.on.play();
          
          setTimeout(() => {
              audio.sounds[color].play();
          }, 350);
      }, 1000);
    }
};