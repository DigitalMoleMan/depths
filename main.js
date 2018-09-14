const canvas = c = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 32;

function init() {
    for (i = 0; i < 400; i++) {
        tiles.push(
            tile = {
                x: i % 20,
                y: Math.floor(i / 20),
            }
        )
    }
}

var tiles = [
]

var objects = new Array;

function addObject(objectName, xL, xR, yT, yB) {
    objects.push(
        object = {
            name: objectName,
            left: xL,
            right: xR,
            top: yT,
            bottom: yB
        }
    )
}

var selector = {
    tilePos: 0,
    x: 0,
    y: 0,
    s: 1 * scale,
}



$("body").keypress(function (e) {
    if (e.keyCode == 97) selector.tilePos -= 1; //a
    if (e.keyCode == 100) selector.tilePos += 1; //d
    if (e.keyCode == 119) selector.tilePos -= 20; //w
    if (e.keyCode == 115) selector.tilePos += 20; //s
    selector.tilePos %= 400;
 
});

addObject("box", scale, scale * 2, canvas.height - scale, canvas.height);

function renderMain() {
    ctx.fillStyle = "#999";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#00ff00";
    ctx.strokeRect(tiles[selector.tilePos].x * scale, tiles[selector.tilePos].y * scale, selector.s, selector.s);

    document.getElementById("tileinfo").innerHTML = tiles[selector.x].x;
    /*
    for (i = 0; i < objects.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(objects[i].left, objects[i].top);
        ctx.lineTo(objects[i].right, objects[i].top);
        ctx.lineTo(objects[i].right, objects[i].bottom);
        ctx.lineTo(objects[i].left, objects[i].bottom);
        ctx.closePath();
        ctx.stroke();
    }
    */
    requestAnimationFrame(renderMain);
}