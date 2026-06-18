// =========================
// FUNCIONES DEL MODAL
// =========================

function mostrarModal(mensaje) {
    document.getElementById("textoModal").innerHTML = mensaje;
    document.getElementById("miModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar al hacer clic fuera del modal
window.onclick = function(event) {
    let modal = document.getElementById("miModal");

    if (event.target === modal) {
        cerrarModal();
    }
};

// =========================
// RECTÁNGULO
// =========================

function calcularRectangulo() {

    let base = Number(document.getElementById("baseR").value);
    let altura = Number(document.getElementById("alturaR").value);

    if (base <= 0 || altura <= 0) {
        mostrarModal("⚠️ Ingresa valores válidos para la base y la altura.");
        return;
    }

    let area = base * altura;
    let perimetro = 2 * (base + altura);

    mostrarModal(`
        <h3>🟦 Rectángulo</h3>
        <p><strong>Área:</strong> ${area}</p>
        <p><strong>Perímetro:</strong> ${perimetro}</p>
    `);
}

// =========================
// CUADRADO
// =========================

function calcularCuadrado() {

    let lado = Number(document.getElementById("ladoC").value);

    if (lado <= 0) {
        mostrarModal("⚠️ Ingresa un valor válido para el lado.");
        return;
    }

    let area = lado * lado;
    let perimetro = 4 * lado;

    mostrarModal(`
        <h3>🟨 Cuadrado</h3>
        <p><strong>Área:</strong> ${area}</p>
        <p><strong>Perímetro:</strong> ${perimetro}</p>
    `);
}

// =========================
// CÍRCULO
// =========================

function calcularCirculo() {

    let radio = Number(document.getElementById("radio").value);

    if (radio <= 0) {
        mostrarModal("⚠️ Ingresa un valor válido para el radio.");
        return;
    }

    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;

    mostrarModal(`
        <h3>⚪ Círculo</h3>
        <p><strong>Área:</strong> ${area.toFixed(2)}</p>
        <p><strong>Perímetro:</strong> ${perimetro.toFixed(2)}</p>
    `);
}

// =========================
// TRIÁNGULO
// =========================

function calcularTriangulo() {

    let base = Number(document.getElementById("baseT").value);
    let altura = Number(document.getElementById("alturaT").value);

    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);

    if (
        base <= 0 ||
        altura <= 0 ||
        lado1 <= 0 ||
        lado2 <= 0 ||
        lado3 <= 0
    ) {
        mostrarModal("⚠️ Ingresa valores válidos para el triángulo.");
        return;
    }

    let area = (base * altura) / 2;
    let perimetro = lado1 + lado2 + lado3;

    mostrarModal(`
        <h3>🔺 Triángulo</h3>
        <p><strong>Área:</strong> ${area}</p>
        <p><strong>Perímetro:</strong> ${perimetro}</p>
    `);
}