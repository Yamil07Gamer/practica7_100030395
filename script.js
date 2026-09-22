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

function calcularpromedio(event){
    event.preventDefault();

    const p1 = document.getElementById("parcial1").value;
    const p2 = document.getElementById("parcial2").value;
    const p3 = document.getElementById("parcial3").value;

    console.log("Valores capturados inicando secuencia de transformacion");

    const n1 = parseFloat(p1);
    const n2 = parseFloat(p2);
    const n3 = parseFloat(p3);

    const resultado = document.getElementById("resultadopromedio");

    // validaciones

    if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
        console.log("Datos mal registrados")
        resultado.textContent = "Error, favor de ingresar correctamente los datos";
        resultado.className = "bg-danger";
        return;
    }

    if ((n1 > 100) || (n1 < 0)){
        console.log("Dato mal registrado p1")
        resultado.textContent = "Error, favor de ingresar una valor entre el 0 al 100";
        resultado.className = "bg-danger";
        return;
    }
    else if ((n2 > 100) || (n2 < 0)){
        console.log("Dato mal registrado p2")
        resultado.textContent = "Error, favor de ingresar una valor entre el 0 al 100";
        resultado.className = "bg-danger";
        return;
    }
    else if ((n3 > 100) || (n3 < 0)){
        console.log("Dato mal registrado p2")
        resultado.textContent = "Error, favor de ingresar una valor entre el 0 al 100";
        resultado.className = "bg-danger";
        return;
    }


    console.log("Validaciones pasadas")
    const promedio = (n1 + n2 + n3) / 3;
    const promediofixed = promedio.toFixed(2);

    if (promedio >= 70){
        resultado.textContent = `Promedio = ${promediofixed} - Aprovado`;
        resultado.className = "bg-success";
    }
    else{
        resultado.textContent = `Promedio = ${promediofixed} - Reprovado`;
        resultado.className = "bg-warning text-dark";
    }
}

