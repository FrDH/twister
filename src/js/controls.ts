import * as game from './game';
import * as audio from './audio';

/** The play / pause button.  */
const controlElem = document.querySelector('.control');

/** Text inside the button. */
const controlText = controlElem?.querySelector('.control__text');

/** The game. */
const gameElem = document.querySelector('.game');

/** Initialise the controls */
export const init = () => {

    // Toggle play / pause when clicking the button.
    controlElem?.addEventListener('click', () => {

        // Pause the game
        if (gameElem?.classList.contains('is-playing')) {
            game.pause();
            
        // Play the game
        } else if (gameElem?.classList.contains('is-paused')) {
            game.play();
        }
    });
}

/** Reset the controls to "Start" */
export const reset = () => {

    //  Set button to "start"
    if (controlText) {
        controlText.innerHTML = 'Start';
    }
    
    // Start the countdown when clicking the button (once).
    controlElem?.addEventListener('click', () => {

        //  Preload all sounds.
        audio.preload();

        // Countdown from 5 to 0.
        if (controlText) {
            let loop = 5;
            controlText.innerHTML = `${loop}`;

            let startInterval = setInterval(() => {
                loop--;
                
                if (loop == 0) {
                    controlText.innerHTML = '';
                    clearInterval(startInterval);
                    game.play();
                
                } else {
                    controlText.innerHTML = `${loop}`;
                }

            }, 1000);

        // No countdown, play the game immediately.
        } else {
            game.play();
        }
    }, {
        once: true
    });
}