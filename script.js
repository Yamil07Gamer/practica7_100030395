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
    console.log("Datos limpiados");
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
        alerta();
        resultado.textContent = "Error, favor de ingresar correctamente los datos";
        resultado.className = "bg-danger";
        return;
    }

    if ((n1 > 100) || (n1 < 0)){
        console.log("Dato mal registrado p1")
        alerta();
        resultado.textContent = "Error, favor de ingresar una valor entre el 0 al 100";
        resultado.className = "bg-danger";
        return;
    }
    else if ((n2 > 100) || (n2 < 0)){
        console.log("Dato mal registrado p2")
        alerta();
        resultado.textContent = "Error, favor de ingresar una valor entre el 0 al 100";
        resultado.className = "bg-danger";
        return;
    }
    else if ((n3 > 100) || (n3 < 0)){
        console.log("Dato mal registrado p2")
        alerta();
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
        aprovo();
    }
    else{
        resultado.textContent = `Promedio = ${promediofixed} - Reprovado`;
        resultado.className = "bg-warning text-dark";
        reprovo();
    }
}

// lista dinamica 

function agregarElemento() {
    const dato = document.getElementById("inputtext").value;
    const lista = document.getElementById("listadinamica");
    const nuevoElemto = document.createElement("li");

    nuevoElemto.className = "text-light";

    if (dato.trim() == ""){
        console.log("Dato vacio");
        alerta();
        window.alert("Ingrese algo en el cuadro de texto") //me fume la sintaxis y si funciono XDXD
        return;
    }

    nuevoElemto.textContent = dato;
    lista.appendChild(nuevoElemto);

    document.getElementById("inputtext").value = "";
    agregarelemento();
}

function limpiarElemento() {
    console.log("Vaciando lista")
    document.getElementById("listadinamica").innerHTML = "";
    agregarelemento();
}

// cambio de estilos

function cambiarbg(){
    const bg = document.querySelector("body");
    console.log("Intentando cambiar el bg a blanco");

    if (bg.className.trim() == "bg-light"){
        console.log("Nada que hacer");
        alerta();
        window.alert("El color ya a sido cambiado");
        return;
    }
    else{
        fb();
        bg.className=("bg-light");
        return;
    }
}

function originalbg(){
    const bg = document.querySelector("body");
    console.log("Intentando regresar el bg original");

    if (bg.className.trim() == "bg-dark"){
        console.log("Nada que hacer");
        alerta();
        window.alert("El color ya a sido cambiado al original");
        return;
    }
    else{
        bg.className=("bg-dark");
        return;
    }
}

//fuciones basuras XDXD



document.addEventListener('click', function playAudio(){
    const audio = document.getElementById('musicafondo');
    audio.volume = 0.2;
    audio.play();

    document.removeEventListener('click', playAudio);
}, {once:true});

document.querySelectorAll('#valores').forEach(boton => { //aqui se pone el id o clase del elemento que sonara
        boton.addEventListener('click', () => {
            const audioClick = document.getElementById('sonido_click'); //aqui el id del audio en el html
            audioClick.currentTime = 0; // Reinicia el audio para permitir clics rápidos seguidos
            audioClick.volume = 0.3;    // Volumen del clic
            audioClick.play().catch(error => console.log("Reproducción bloqueada temporalmente") && agregarElemento());
        });
    });

document.querySelectorAll('#limpiar').forEach(boton => { //aqui se pone el id o clase del elemento que sonara
        boton.addEventListener('click', () => {
            const audioClick = document.getElementById('sonido_click2'); //aqui el id del audio en el html
            audioClick.currentTime = 0; // Reinicia el audio para permitir clics rápidos seguidos
            audioClick.volume = 0.3;    // Volumen del clic
            audioClick.play().catch(error => console.log("Reproducción bloqueada temporalmente") && agregarElemento());
        });
    });

function aprovo(){
    const audio = document.getElementById("aprov_sonido");
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}

function reprovo(){
    const audio = document.getElementById("reprov_sonido");
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}

function fb(){
    const audio = document.getElementById("flashbang");
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}

function alerta(){
    const audio = document.getElementById("alerta");
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}

function agregarelemento(){
    const audio = document.getElementById("nuevoelemento");
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}