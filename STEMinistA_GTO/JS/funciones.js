const inicio = document.getElementById('inicio');
const nosotras = document.getElementById('nosotras');
const eventos = document.getElementById('eventos');
const cursos = document.getElementById('cursosdinamicos');
const quieroSer = document.getElementById('quieroSer');

const btnInicio = document.getElementById('btnInicio');
const btnNosotras = document.getElementById('btnNosotras');
const btnEventos = document.getElementById('btnEventos');
const btnHackatones = document.getElementById('btnHackatones');
const btnBootcamps = document.getElementById('btnBootcamps');
const btnCiencia = document.getElementById('btnCiencia');
const btnTecnologia = document.getElementById('btnTecnologia');
const btnIngenieria = document.getElementById('btnIngenieria');
const btnMatematicas = document.getElementById('btnMatematicas');
const btnCertificaciones = document.getElementById('btnCertificaciones');
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
    pie.style.display = "block";
});
btnHackatones.addEventListener("click", () => {
    ocultaContenido();
    eventos.style.display = "block";
    pie.style.display = "block";
});
btnBootcamps.addEventListener("click", () => {
    ocultaContenido();
    eventos.style.display = "block";
    pie.style.display = "block";
});
btnCiencia.addEventListener("click", () => {
    ocultaContenido();
    cursos.style.display = "block";
    pie.style.display = "block";
});
btnTecnologia.addEventListener("click", () => {
    ocultaContenido();
    cursos.style.display = "block";
    pie.style.display = "block";
});
btnIngenieria.addEventListener("click", () => {
    ocultaContenido();
    cursos.style.display = "block";
    pie.style.display = "block";
});
btnMatematicas.addEventListener("click", () => {
    ocultaContenido();
    cursos.style.display = "block";
    pie.style.display = "block";
});
btnQuieroSer.addEventListener("click", () => {
    ocultaContenido();
    quieroSer.style.display = "block";
    pie.style.display = "block";
});

function ocultaContenido(){
    const containers = document.getElementsByClassName('secciones');
    console.log(containers);
    for(let i = 0; i < containers.length; i++){
        containers[i].style.display = 'none';
    }
};