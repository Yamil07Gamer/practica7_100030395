// funcion de desplegar datos, seccion 1

function desplegardatos(){
    

    console.log("Iniciando el desplegado de datos")

    const nombre = "Yamil Alexei Courtois Paredes";
    const matricula = "100030395";
    const carrera = "Licenciatura en sistema computacionales"
    const semestre = "5-K"

    const parrafo = document.getElementById("resultados");

    parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
}