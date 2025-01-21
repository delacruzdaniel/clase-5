const $numeros = document.querySelector("#numeros");
const elementosLi = $numeros.children;
const numerosArray = [];

const $calcular = document.querySelector("#calcular");

$calcular.onclick = function () {
    capturarNumeros();
    document.querySelector("#promedio").innerHTML = `El promedio es: ${calcularPromedio(numerosArray)}`;
    document.querySelector("#mas-bajo").innerHTML = `El número más bajo es: ${numeroMasBajo(numerosArray)}`;
    document.querySelector("#mas-alto").innerHTML = `El número más alto es: ${numeroMasAlto(numerosArray)}`;
    document.querySelector("#mas-repetido").innerHTML = `El número más repetido es: ${numeroMasRepetido(numerosArray)}`;
    return false;
};

function capturarNumeros() {
    numerosArray.length = 0;
    for (let i = 0; i < elementosLi.length; i++) {
        const numero = Number(elementosLi[i].textContent);
        numerosArray.push(numero);
    }
}

function calcularPromedio(numerosArray) {
    let suma = 0;
    for (let i = 0; i < numerosArray.length; i++) {
        suma += numerosArray[i];
    }
    return suma / numerosArray.length;
}

function numeroMasBajo(numerosArray) {
    let menor = numerosArray[0];
    for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] < menor) {
            menor = numerosArray[i];
        }
    }
    return menor;
}

function numeroMasAlto(numerosArray) {
    let mayor = numerosArray[0];
    for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] > mayor) {
            mayor = numerosArray[i];
        }
    }
    return mayor;
}

function numeroMasRepetido(numerosArray) {
    let maxRepeticiones = 0;
    let numeroFrecuente = null;
    for (let i = 0; i < numerosArray.length; i++) {
        let repeticiones = 0;
        for (let j = 0; j < numerosArray.length; j++) {
            if (numerosArray[i] === numerosArray[j]) {
                repeticiones++;
            }
        }
        if (repeticiones > maxRepeticiones) {
            maxRepeticiones = repeticiones;
            numeroFrecuente = numerosArray[i];
        }
    }
    return numeroFrecuente;
}
