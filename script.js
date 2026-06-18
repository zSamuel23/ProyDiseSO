function mostrarModal(mensaje){
    document.getElementById("textoModal").innerHTML = mensaje;
    document.getElementById("miModal").style.display = "block";
}

function cerrarModal(){
    document.getElementById("miModal").style.display = "none";
}

function limpiarCampos(ids){
    ids.forEach(id => {
        document.getElementById(id).value = "";
    });
}

window.onclick = function(event){
    const modal = document.getElementById("miModal");

    if(event.target === modal){
        cerrarModal();
    }
}

function calcularRectangulo(){

    let base = Number(document.getElementById("baseR").value);
    let altura = Number(document.getElementById("alturaR").value);

    if(base <= 0 || altura <= 0){
        mostrarModal("¡Alto! Debes escribir números mayores que 0.");
        return;
    }

    let area = base * altura;
    let perimetro = 2 * (base + altura);

    mostrarModal(`
        <h3>¡Rectángulo calculado!</h3>
        <br>
         Área: <strong>${area}</strong><br><br>
         Perímetro: <strong>${perimetro}</strong><br><br>
         ¡Excelente trabajo!
    `);

    limpiarCampos(["baseR","alturaR"]);
}

function calcularCuadrado(){

    let lado = Number(document.getElementById("ladoC").value);

    if(lado <= 0){
        mostrarModal(" ¡Alto! Debes escribir un número mayor que 0.");
        return;
    }

    let area = lado * lado;
    let perimetro = 4 * lado;

    mostrarModal(`
        <h3> ¡Cuadrado calculado!</h3>
        <br>
         Área: <strong>${area}</strong><br><br>
         Perímetro: <strong>${perimetro}</strong><br><br>
         ¡Lo hiciste muy bien!
    `);

    limpiarCampos(["ladoC"]);
}

function calcularCirculo(){

    let radio = Number(document.getElementById("radio").value);

    if(radio <= 0){
        mostrarModal(" ¡Alto! Debes escribir un número mayor que 0.");
        return;
    }

    let area = Math.PI * radio * radio;
    let perimetro = 2 * Math.PI * radio;

    mostrarModal(`
        <h3> ¡Círculo calculado!</h3>
        <br>
        Área: <strong>${area.toFixed(2)}</strong><br><br>
         Perímetro: <strong>${perimetro.toFixed(2)}</strong><br><br>
         ¡Sigue aprendiendo!
    `);

    limpiarCampos(["radio"]);
}

function calcularTriangulo(){

    let base = Number(document.getElementById("baseT").value);
    let altura = Number(document.getElementById("alturaT").value);

    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);

    if(base <= 0 || altura <= 0 || lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
        mostrarModal(" ¡Alto! Debes completar todos los datos correctamente.");
        return;
    }

    let area = (base * altura) / 2;
    let perimetro = lado1 + lado2 + lado3;

    mostrarModal(`
        <h3> ¡Triángulo calculado!</h3>
        <br>
         Área: <strong>${area}</strong><br><br>
         Perímetro: <strong>${perimetro}</strong><br><br>
         ¡Eres un genio de las figuras!
    `);

    limpiarCampos([
        "baseT",
        "alturaT",
        "lado1",
        "lado2",
        "lado3"
    ]);
}
