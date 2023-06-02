function reveal() {
    document.getElementById('transitionOverlayB2').style.visibility = 'visible';
    document.getElementById('transitionOverlayB2').style.marginBottom = '100vh';
    setTimeout(function(){
        document.getElementById('transitionOverlayG2').style.visibility = 'visible';
        document.getElementById('transitionOverlayG2').style.marginBottom = '100vh';
        setTimeout(function(){
            document.getElementById('transitionOverlayR2').style.visibility = 'visible';
            document.getElementById('transitionOverlayR2').style.marginBottom = '100vh';
        }, 60);
    }, 60);
}