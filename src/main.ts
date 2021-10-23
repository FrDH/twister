import './style.scss'

import config from './js/config';
import controls from './js/controls';
import audio from './js/audio';
import start from './js/start';

/** Get random entry from array */
const random = (arr: string[]) => {
  return arr[Math.floor((Math.random() * arr.length))];
}

/** Last set limb. */
let currentLimb: string = '';

/** Last set color. */
let currentColor: string = '';

start();

controls(() => {
    let newLimb = '',
        side = '',
        limb = '',
        color = '';
    
    do {
        side = random(config.sides);
        limb = random(config.limbs);
        color = random(config.colors);
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
    const elem = document.querySelector(`.limb--${side}.limb--${limb}`);

    if (elem) {
      //  Set classes to the new limb.
      elem.classList.remove(...config.colors);
      elem.classList.add(color);

      //  Play audio.
      audio[`${side}${limb}`].play();
      
      setTimeout(() => {
        audio.on.play();
          
          setTimeout(() => {
              audio[color].play();
          }, 350);
      }, 1000);
    }
});