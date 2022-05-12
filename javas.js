const colors = ['Green', 'Red', 'Blue', 'Yellow', 'Black', 'Purple', 'Pink', 'Orange', 'Gray'];

const btn = document.querySelector('.botao');
const color = document.querySelector('.color-aa');

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colors.length)

    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];

    if ( random == 4 ) {
        btn.style.color = 'white';
        btn.style.border = "1px solid white";
    } else {
        btn.style.color = 'Black';
        btn.style.border = "1px solid black";
    };
});

function resetar () {
    let random = Math.floor(Math.random() * colors.length)

    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];

    if ( random == 4 ) {
        btn.style.color = 'white';
        btn.style.border = "1px solid white";
    } else {
        btn.style.color = 'Black';
        btn.style.border = "1px solid black";
    };
}
