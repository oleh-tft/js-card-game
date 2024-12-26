function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let shapes = [
    "circle",
    "square",
    "heart",
    "hexagon",
    "star"
];

let started = false;
let toOpen = 10;
let currentlyOpen = 0;
let clicked = [];