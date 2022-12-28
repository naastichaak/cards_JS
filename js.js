function box1() {
    let box1 = document.getElementById("box1");
    box1.style.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function box2() {
    let box2 = document.getElementById("box2");
    box2.style.borderRadius = `${random2(50)}%`;
}

function box3() {
    document.body.style.background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function box4() {
    let box4 = document.getElementById("box4");
    box4.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}

function box5() {
    let box5 = document.getElementById("box5");
    box5.style.fontFamily = 'serif';
}




function random(arg) {
    return Math.floor(Math.random() * arg);
}

function random2(i) {
    return Math.floor(Math.random() * i);
}