let iconeMenu = document.querySelector('#icone-menu');
let menu = document.querySelector('.menu');

iconeMenu.onclick = () => {
    iconeMenu.classList.toggle('bx-x');
    menu.classList.toggle('abrir');
}

const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.Reveal('.goblin-texto' ,{delay:200,origin:'top'});
sr.Reveal('.goblin-img' ,{delay:450,origin:'top'});
sr.Reveal('.icones' ,{delay:500,origin:'top'});
sr.Reveal('.rolagem' ,{delay:500,origin:'top'});