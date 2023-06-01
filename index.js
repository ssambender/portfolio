if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}

let width;
let height;

function updateWindowSize() {
    width = window.innerWidth;
    height = window.innerHeight;
}
window.addEventListener('resize', updateWindowSize);
updateWindowSize();

let mouseX = 0;
let mouseY = 0;

let displacementX;
let displacementY;

const red = document.getElementById('overlayTextR');
const redB = document.getElementById('overlayTextRB');

const green = document.getElementById('overlayTextG');
const greenB = document.getElementById('overlayTextGB');

const numX = 30; /* if comment below is uncommented, then change num to 20 */
const numY = 50;

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    displacementX = width/2 - (width - mouseX);
    displacementY = height/2 - (height - 100 - mouseY);

    /*
    if(Math.abs(displacementX) >= width/6) {
        displacementX = width/6 * (displacementX/Math.abs(displacementX));
    }
    if(Math.abs(displacementY) > height/6) {
        displacementY = height/6 * (displacementY/Math.abs(displacementY));
    }
    */

    red.style.marginLeft = displacementX/numX + 'px';
    redB.style.marginLeft = displacementX/numX + 'px';
    green.style.marginLeft = displacementX/numX * -1 + 'px';
    greenB.style.marginLeft = displacementX/numX * -1 + 'px';

    red.style.marginTop = displacementY/numY + 'px';
    redB.style.marginTop = displacementY/numY + 'px';
    green.style.marginTop = displacementY/numY * -1 + 'px';
    greenB.style.marginTop = displacementY/numY * -1 + 'px';
});



function uiuxPage() {
    alert("ui ux page coming soon");
}

function gdPage() {
    alert("graphic design page coming soon");
}

function aboutPage() {
    alert("about page coming soon");
}