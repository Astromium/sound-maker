// a function which will be executed when the page load
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound'); // array
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visuals');
    const color = ['#60e394', '#D36060', '#C060D3', '#d3d160', '#6860d3', '#60b321']


    //get going with the sound

    pads.forEach((pad, index)  => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            makeBubbles(index);
        })
    });

    // bubble creator

    const makeBubbles = (index) => {
        const bubble = document.createElement('div'); // creates a div
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', () => {
            visual.removeChild(bubble);
        })
    }
})