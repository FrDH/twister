import audio from './audio';

export default () => {
    //  Play all sounds once, so the browser can re-play them without the 
    //  DOMException: play() failed because the user didn't interact with the document first.

    const control = document.querySelector('.control');

    control?.addEventListener('click', () => {
        control?.classList.remove('control--start');
        control?.classList.add('control--pause');
    }, {
        once: true
    });
    
    document.addEventListener('click', event => {
        event.stopPropagation();
        
        for (const sound in audio) {
            audio[sound].muted = 'muted';
            audio[sound].play();
            audio[sound].onended = () => {
                audio[sound].muted = null;
                audio[sound].onended = null;
            }
        }
    }, {
        once: true
    })
}