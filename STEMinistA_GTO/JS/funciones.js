
const inicio = document.getElementById('inicio');
const nosotras = document.getElementById('nosotras');
const eventos = document.getElementById('eventos');
const cursos = document.getElementById('cursos');
const quieroSer = document.getElementById('quieroSer');

const btnInicio = document.getElementById('btnInicio');
const btnNosotras = document.getElementById('btnNosotras');
const btnEventos = document.getElementById('btnEventos');
const btnCursos = document.getElementById('btnCursos');
const btnQuieroSer = document.getElementById('btnQuieroSer');


btnInicio.addEventListener("click", () => {
    ocultaContenido();
    inicio.style.display = "block";
});
btnNosotras.addEventListener("click", () => {
    ocultaContenido();
    nosotras.style.display = "block";
});
btnEventos.addEventListener("click", () => {
    ocultaContenido();
    eventos.style.display = "block";
});
btnCursos.addEventListener("click", () => {
    ocultaContenido();
    cursos.style.display = "block";
});
btnQuieroSer.addEventListener("click", () => {
    ocultaContenido();
    quieroSer.style.display = "block";
});

function ocultaContenido(){
    const containers = document.getElementsByClassName('secciones');
    console.log(containers);
    for(let i = 0; i < containers.length; i++){
        containers[i].style.display = 'none';
    }
};
