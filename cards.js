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

$(document).ready(function() {

    function start() {
        shuffle(shapes);
        $(".card-first").each(function(i) {
            $(this).addClass(`${shapes[i]}`);
        });
        shuffle(shapes);
        $(".card-second").each(function(i) {
            $(this).addClass(`${shapes[i]}`);
        });
    }

    start();

    $("#btn-start").click(function() {
        started = !started;
        if (started) {
            $(this).text("FINISH");
            $(".card").addClass("back");

            $(".card").click(function() {
                if (currentlyOpen < 2 && $(this).hasClass("back")) {
                    $(this).removeClass("back");
                    currentlyOpen++;
                    // + $(this).hasClass("card-second") ? 5 : 0
                    clicked.push($(this).index);
                    console.log(clicked);
                }
            });
        } else {
            $(".card").removeClass("back");
            $(this).text("START");
            start();
        }
    });
});