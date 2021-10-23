import config from './config';

export default (fn: Function) => {

    /** Interval for the next step. */
    let interval: any = null;

    /** Play / pause button. */
    const control = document.querySelector('.control');

    // Toggle play / pause.
    control?.addEventListener('click', () => {

        // Play
        if (control.classList.contains('control--play')) {
            fn();
            interval = setInterval(fn, config.duration);

        //  Pause
        } else if (control.classList.contains('control--pause')) {
            clearInterval(interval);
            document.querySelectorAll('.limb').forEach(limb => {
                limb.classList.remove(...config.colors);
            });
        }

        control.classList.toggle('control--play')
        control.classList.toggle('control--pause');
    });

}