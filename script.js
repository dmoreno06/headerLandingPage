let booton = document.getElementById('icon');
let links = document.getElementById('link');
let contador = 0;

booton.addEventListener('click', function(e){
    e.preventDefault();
    if (contador == 0) {
        links.className = ('link dos');
        contador=1;
    } else {
        links.classList.remove('dos');
        links.className = ('link one');
        contador=0;
    }
});
