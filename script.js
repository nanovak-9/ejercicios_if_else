/*function climas() {
    const elClimaHoy = prompt("¿Cómo está el clima hoy? Frio, soleado, lluvioso o fresco.");

    switch(elClimaHoy) {
        case 'frio':
            alert("Ponte un suéter 💕")
            break;
        case 'soleado':
            alert("Ponte bloqueador 😎")
            break;
        case 'lluvioso':
            alert("Lleva tu paraguas~")
            break;
        case 'fresco':
            alert("Mijo, no te vaiga dar la frialdah 😮")
            break;
        default:
            alert("No pos.. ta cañón 👀");
    }
}

function estaciones() {
    const elMes = prompt("¿Cuál estación es en este mes? Escribe un mes.");

    switch(elMes.toLocaleLowerCase()) {
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            alert("Otoño")
            break;
        case 'diciembre':
        case 'enero':
        case 'febrero':
            alert("Invierno")
            break;
        case 'marzo':
        case 'abril':
        case 'mayo':
            alert("Primavera")
            break;
        case 'junio':
        case 'julio':
        case 'agosto':
            alert("Verano")
            break;
        default:
            alert("Error. Intenta nuevamente.");
    }
}

function unClick() {
    estaciones()
}
*/

function eresBellx() {
    const belleza = prompt("¿Eres bellísimx?");
    if (belleza === "sí") {
        alert("Ciertamente")
} else {
    alert("No te creo")
}
}

function numeroEntreDos() {
    const tuNumero = prompt("Escribe un número, ¿Este número es divisible entre dos?");
    if (tuNumero % 2 == 0) {
        alert(`¡El número ${tuNumero} es divisible entre 2!`)
    } else {
        alert(`El número ${tuNumero} no es divisible entre 2 ):`)
    }
}

function esPar() {
    const unNumero = prompt("Escribe un número, ¿será par 👀?");
    if (unNumero % 2 == 0) {
        alert(`¡El número ${unNumero} es par!`)
    } else {
        alert(`El número ${unNumero} no es par 😭💔`)
    }
}

function lucky1000() {
    const numeroDeCliente = prompt("Escribe tu número de cliente", 1000)
    if (numeroDeCliente == 1000) {
        alert("¡Ganaste un premio!")
    } else {
        alert(`${numeroDeCliente}. Lo sentimos, sigue participando.`)
    }
}

function esMenor() {
    const otroNumero1 = prompt("Escribe un número:");
    const otroNumero2 = prompt("Escribe otro número:");
    if (otroNumero1 > otroNumero2) {
        alert(`¡${otroNumero2} es menor!`)
    } else {
        alert(`¡${otroNumero1} es menor!`)
    }
}

function esMayor() {
    const unNumero1 = prompt("Escribe un número:");
    const unNumero2 = prompt("Escribe otro número:");
    const unNumero3 = prompt("Escribe otro número más:");
    if (unNumero1 == unNumero2 || unNumero1 == unNumero3 || unNumero2 == unNumero3) {
        alert("Hay dos número iguales 😗, inténtalo con números diferentes 👀")
    } else if (unNumero2 > unNumero1 && unNumero2 > unNumero3) {
        alert(`¡${unNumero2} es mayor!`)
    } else if (unNumero3 > unNumero1 && unNumero3 > unNumero2) {
        alert(`¡${unNumero3} es mayor!`)
    }else if (unNumero1 > unNumero2 && unNumero1 > unNumero3) {
        alert(`¡${unNumero1} es mayor!`)
    }
}

function semana() {
    const diaDeLaSemana = prompt("Escribe un día de la semana:");
    if (diaDeLaSemana.toLowerCase() == "lunes") {
        alert("Lunes: Principio de semana, principio de semana, no vo'a trabajar~")
    } else if (diaDeLaSemana.toLowerCase() == "viernes") {
        alert("Viernes: Muere Jesucristo, ¿Dónde se ha visto? No vo'a trabajar~")
    } else if (diaDeLaSemana.toLowerCase() == "sabado" || diaDeLaSemana.toLowerCase() == "domingo") {
    alert("¡Día de descanso! Bien merecido, no vo'a trabajar~")
    } else {
    alert("¡No vo'a trabajar, no vo'a trabajar~!")
    }
}

function evaluarCalificacion() {
    const calificacion = prompt("Ingresa una calificación entre 1 y 10:")
    if (calificacion >= 1 && calificacion <= 10){
        evaluarCalificacion1()
    } else {
        alert("Error: El número ingresado debe ser entre 1 y 10.")
    }
    function evaluarCalificacion1() {
        if (calificacion < 6 ) {
            alert("Reprobado")
        } else if (calificacion >=6 && calificacion <=8) {
            alert("Regular")
        }else if (calificacion == 9) {
            alert("Bien")
        } else {
            alert("Excelente")
        }

    }

}

const heladoNatural = 50;
const toppingOreo = 10;
const toppingKitKat = 15;
const toppingBrownie = 20; 

function deliHelado() {
    const conTopping = prompt("Escoge tu topping: Oreo, KitKat, o Brownie")
    let heladoConTopping;
    let topping;

    if (conTopping.toLowerCase() == "oreo"){
        heladoConTopping = heladoNatural + toppingOreo;
        topping = "Oreo";
    } else if (conTopping.toLowerCase() == "kitkat"){
        heladoConTopping = heladoNatural + toppingKitKat;
        topping = "KitKat";
    } else if (conTopping.toLowerCase() == "brownie"){
        heladoConTopping = heladoNatural + toppingBrownie;
        topping = "Brownie";
    }else {
        alert(`No tenemos ese topping, lo sentimos. El precio de tu helado sin toppings será de $${heladoNatural} pesos.`)
        return
    }

    alert(`El costo de tu helado con topping de ${topping} será de $${heladoConTopping}`)
}


const costoMensualCourse = 4999
const costoMensualCarrera = 3999
const costoMensualMaster = 2999
const becaFacebook = .20
const becaGoogle = .15
const becaJesua = .50
const duracionCourse = 2
const duracionCarrera = 6
const duracionMaster = 12

function costoPrograma() {
    const tuPrograma = prompt("Escribe tu curso de elección: Course, Carrera o Master")
    const tuBeca = prompt("Escribe la beca con la que cuentas: Facebook, Google o Jesua.")
    let costoMensualPrograma
    let costoTotalPrograma

    if (tuPrograma.toLowerCase() == "course") {
        if (tuBeca.toLowerCase() == "facebook") {
            costoMensualPrograma = costoMensualCourse - (costoMensualCourse * becaFacebook);
            costoTotalPrograma = costoMensualPrograma * duracionCourse;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionCourse} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        } else if (tuBeca.toLowerCase() == "google") {
            costoMensualPrograma = costoMensualCourse - (costoMensualCourse * becaGoogle);
            costoTotalPrograma = costoMensualPrograma * duracionCourse;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionCourse} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        } else if (tuBeca.toLowerCase() == "jesua")  {
            costoMensualPrograma = costoMensualCourse - (costoMensualCourse * becaJesua);
            costoTotalPrograma = costoMensualPrograma * duracionCourse;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionCourse} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        }
    } else if (tuPrograma.toLowerCase() == "carrera") {
        if (tuBeca.toLowerCase() == "facebook") {
            costoMensualPrograma = costoMensualCarrera - (costoMensualCarrera * becaFacebook);
            costoTotalPrograma = costoMensualPrograma * duracionCarrera;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionCarrera} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        } else if (tuBeca.toLowerCase() == "google") {
            costoMensualPrograma = costoMensualCarrera - (costoMensualCarrera * becaGoogle);
            costoTotalPrograma = costoMensualPrograma * duracionCarrera;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionCarrera} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        } else if (tuBeca.toLowerCase() == "jesua")  {
            costoMensualPrograma = costoMensualCarrera - (costoMensualCarrera * becaJesua);
            costoTotalPrograma = costoMensualPrograma * duracionCarrera;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionCarrera} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        }
    } else if (tuPrograma.toLowerCase() == "master") {
        if (tuBeca.toLowerCase() == "facebook") {
            costoMensualPrograma = costoMensualMaster - (costoMensualMaster * becaFacebook);
            costoTotalPrograma = costoMensualPrograma * duracionMaster;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionMaster} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        } else if (tuBeca.toLowerCase() == "google") {
            costoMensualPrograma = costoMensualMaster - (costoMensualMaster * becaGoogle);
            costoTotalPrograma = costoMensualPrograma * duracionMaster;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionMaster} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        } else if (tuBeca.toLowerCase() == "jesua")  {
            costoMensualPrograma = costoMensualMaster - (costoMensualMaster * becaJesua);
            costoTotalPrograma = costoMensualPrograma * duracionMaster;
            alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionMaster} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
        }
    }else {
        alert("Algo salió mal. Inténtalo nuevamente.")
    }
}


/*
function costoPrograma2() {
    const tuPrograma = prompt("Escribe tu curso de elección: Course, Carrera o Master");
    let costoMensualPrograma;
    let costoTotalPrograma;
    let duracionPrograma;

    if (tuPrograma.toLowerCase() == "course") {
        costoMensualPrograma = costoMensualCourse;
        duracionPrograma = duracionCourse;
    } else if (tuPrograma.toLowerCase() == "carrera") {
        costoMensualPrograma = costoMensualCarrera;
        duracionPrograma = duracionCarrera;
    } else if (tuPrograma.toLowerCase() == "master") {
        costoMensualPrograma = costoMensualMaster;
        duracionPrograma = duracionMaster;
    }else {
        alert("Algo salió mal. Inténtalo nuevamente.")
        return
    }

    const tuBeca = prompt("Escribe la beca con la que cuentas: Facebook, Google o Jesua.")

    if (tuBeca.toLowerCase() == "facebook") {
        costoMensualPrograma = costoMensualPrograma - (costoMensualPrograma * becaFacebook);
        costoTotalPrograma = costoMensualPrograma * duracionPrograma;
    } else if (tuBeca.toLowerCase() == "google") {
        costoMensualPrograma = costoMensualPrograma - (costoMensualPrograma * becaGoogle);
        costoTotalPrograma = costoMensualPrograma * duracionPrograma;
    } else if (tuBeca.toLowerCase() == "jesua")  {
        costoMensualPrograma = costoMensualPrograma - (costoMensualPrograma * becaJesua);
        costoTotalPrograma = costoMensualPrograma * duracionPrograma;
    } else {
        costoTotalPrograma = costoMensualPrograma * duracionPrograma;
    }

    alert(`Tu costo mensual será de $${costoMensualPrograma}, y tendrá una duración de ${duracionPrograma} meses. El costo total de tu programa será de $${costoTotalPrograma}`)
}

function unClick() {
    costoPrograma2()
}*/

const coche = .20;
const moto = .10;
const autobus = .50;

function pagoPorDistancia() {
    let tipoDeVehiculo;
    let precioPorKm;
    let pagoTotal;
    const kmRecorridos = prompt("¿Cuántos kilómetros recorriste este mes?");
    const tuVehiculo = prompt("Escribe tu tipo de vehículo: Coche, moto o autobús")

    if (tuVehiculo.toLowerCase() == "coche"){
        tipoDeVehiculo = coche;
    } else if (tuVehiculo.toLowerCase() == "moto"){
        tipoDeVehiculo = moto;
    } else if (tuVehiculo.toLowerCase() == "autobus"){
        tipoDeVehiculo = autobus;
    }

    precioPorKm = (tipoDeVehiculo * kmRecorridos);
       
    if (kmRecorridos >= 0 && kmRecorridos <=100) {
        pagoTotal = precioPorKm + 5;
    } else if (kmRecorridos > 100) {
        pagoTotal= precioPorKm + 10;
    }

    alert(`La cantidad de km que recorriste fue de ${kmRecorridos}, en un vehículo tipo ${tuVehiculo}, con un costo de $${tipoDeVehiculo} pesos por km. Tu pago será por $${pagoTotal}`)
}