const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.botao');
const color = document.querySelector('.color-aa');

btn.addEventListener('click', () => {
    let loop = '#';
        for ( let i = 0; i < 6; i++ ) {
            loop += hex[aleat()];
        };

    document.body.style.backgroundColor = loop;
    color.textContent = loop;
});

function aleat() {
    return Math.floor(Math.random() * hex.length);
};

function resetar2() {
    let loop = '#';
        for ( let i = 0; i < 6; i++ ) {
            loop += hex[aleat()];
        };

    document.body.style.backgroundColor = loop;
    color.textContent = loop;
};