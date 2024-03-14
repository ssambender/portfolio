let mePic = document.getElementById('goodLookingFella');
let currentFrame = 1;
let picCirc1 = document.getElementById("picCirc1");
let picCirc2 = document.getElementById("picCirc2");
let picCirc3 = document.getElementById("picCirc3");
let timer;

function changePic(num) {
    currentFrame = num;
    updatePic();
    //clearTimeout(timer);
}

function updatePic() {
    picCirc1.innerText = "○";
    picCirc2.innerText = "○";
    picCirc3.innerText = "○";

    if (currentFrame === 1) {
        picCirc1.innerText = "●";
        mePic.src = "ME2.jpg";
    }
    else if (currentFrame === 2) {
        picCirc2.innerText = "●";
        mePic.src = "ME3.png";
    }
    else if (currentFrame === 3) {
        picCirc3.innerText = "●";
        mePic.src = "ME4.png";
    }

    //startTimer();
}


function startTimer() {
    let switchTo = currentFrame + 1;
    if (switchTo > 3) {
        switchTo = 1;
    }
    setTimeout(function() { changePic(switchTo); }, 2000); // 5 seconds
}

//window.onload = startTimer;