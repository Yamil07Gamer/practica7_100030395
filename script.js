// funcion de desplegar datos, seccion 1
let clicksecciona = false



// Ejercicio 1, con una lijera mejora, creo que esto se puede refactorizar, creo

function desplegardatos1(){
    
    console.log("Iniciando el desplegado de datos")
    const nombre = "Yamil Alexei Courtois Paredes";
    const matricula = "100030395";
    const carrera = "Licenciatura en sistema computacionales"
    const semestre = "5-K"

    const parrafo = document.getElementById("resultados");

    if (clicksecciona == false){
    
        parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
        clicksecciona = true;
    }
    else if (clicksecciona == true && parrafo.textContent.trim !== ""){
        parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
    }
    else{
        parrafo.textContent = ``;
        clicksecciona = false;
    }
}

function desplegardatos2(){
    
    console.log("Iniciando el desplegado de datos")
    const nombre = "Luis Roberto Miranda de la Cruz";
    const matricula = "100032490";
    const carrera = "Licenciatura en sistema computacionales"
    const semestre = "5-K"

    const parrafo = document.getElementById("resultados");

    if (clicksecciona == false){
    
        parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
        clicksecciona = true;
    }
    else if (clicksecciona == true && parrafo.textContent.trim !== ""){
        parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
    }
    else{
        parrafo.textContent = ``;
        clicksecciona = false;
    }
}

function desplegardatos3(){
    
    console.log("Iniciando el desplegado de datos")
    const nombre = "Alfredo";
    const matricula = "100019830";
    const carrera = "Licenciatura en mordidas del 83"
    const semestre = "9-L"

    const parrafo = document.getElementById("resultados");

    if (clicksecciona == false){
    
        parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
        clicksecciona = true;
    }
    else if (clicksecciona == true && parrafo.textContent.trim !== ""){
        parrafo.textContent = `Nombre: ${nombre} | Matricula: ${matricula} | Carrera: ${carrera} | Semestre ${semestre}`;
    }
    else{
        parrafo.textContent = ``;
        clicksecciona = false;
    }
}

function limpiardatos(){
    const parrafo = document.getElementById("resultados");
    parrafo.textContent = ``;
    clicksecciona = false;
}

// ejercicio de Calculadora



