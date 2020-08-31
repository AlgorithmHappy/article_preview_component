window.addEventListener('load', eventos, false);

function eventos(e){
    let aux = document.getElementById('icon-share');
    let icono = aux.getElementsByTagName('img')[0];
    let aux2 = document.getElementById('flecha');
    let icono2 = aux2.getElementsByTagName('img')[0];
    let aux3 = document.getElementById('iconos');
    let iconos = aux3.getElementsByTagName('img');
    icono.addEventListener('click', sePresiono, false);
    icono2.addEventListener('click', sePresiono, false);
    iconos[0].addEventListener('click', facebook, false);
    iconos[1].addEventListener('click', twitter, false);
    iconos[2].addEventListener('click', pinterest, false);
}

function sePresiono(e){
    let share = document.getElementById('share');
    let style = window.getComputedStyle(share);
    let display = style.getPropertyValue('display');
    if(display == 'none'){
        share.style.display = 'block';
        let compartir = document.getElementById('compartir');
        compartir.style.display = 'none';
    } else {
        share.style.display = 'none';
        let compartir = document.getElementById('compartir');
        compartir.style.display = 'block';
    }
}

// Url de prueba
function facebook(e){
    let strUrl = 'http://www.facebook.com/sharer.php?u=https://www.youtube.com/watch?v=SXcFYnHSG08&p[title]=compartir';
    window.open(strUrl, 'compartir', 'width=' + window.screen.width + ', ' + 'height=' + window.screen.height);
}

function twitter(e){
    let strUrl = 'http://twitter.com/share?text=compartir&url=https://www.youtube.com/watch?v=SXcFYnHSG08';
    window.open(strUrl, 'compartir', 'width=' + window.screen.width + ', ' + 'height=' + window.screen.height);
}

function pinterest(e){
    let strUrl = 'http://pinterest.com/pin/create/button/?url=https://www.youtube.com/watch?v=SXcFYnHSG08&description=compartir';
    window.open(strUrl, 'compartir', 'width=' + window.screen.width + ', ' + 'height=' + window.screen.height);
}
