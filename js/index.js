
// Constantes de intereses dependiendo la cuota
const interesEnSeis = 1.14
const interesEnDoce = 1.52
const interesEnDiesiocho = 1.88
const interesEnTreintayseis = 1.98

//Funcion para validar si el cliente puede acceder al prestamo dependiendo de su salario
function validarSueldo(){
    alert("Para obtener un prestamo el sueldo debe ser mayor a $150000 mensual")
    let totalSuedo = parseInt(prompt("Cuanto es el monto de su salario por mes ?"))
    if (totalSuedo >= 150000){
        prestamoSolicitado();
    }else {
        alert("Su sueldo es menor a $150000, no cumple con los requisitos para obtener un prestamo.")
    }
}

//Funcion para validad si el monto solicitado esta dentro de las condiciones que solicita la empresa, tambien mediante condicionales evalua la cantidad de cuotas y hace la operacion aritmetica
function prestamoSolicitado(){
    let monto = parseInt(prompt("Ingrese la cantidad de dinero que necesita"))
    if (monto > 10000 && monto < 3000000){
        let totalCuotas = parseInt(prompt("¿En cuantas cuotas desea abonar el prestamo?"))
        if(totalCuotas === 6){
            let enSeis = parseInt(((monto*interesEnSeis)/6))
            montoPorCuota(totalCuotas, enSeis);
        }else if ( totalCuotas === 12) {
            let enDoce = parseInt(((monto*interesEnDoce)/12))
            montoPorCuota(totalCuotas, enDoce);
        }else if ( totalCuotas === 18){
            let enDiesiocho = parseInt(((monto*interesEnDiesiocho)/18))
            montoPorCuota(totalCuotas, enDiesiocho);
        }else if ( totalCuotas === 36){
            let enTreintayseis = parseInt(((monto*interesEnTreintayseis)/36))
            montoPorCuota(totalCuotas, enTreintayseis);
        }else {
            alert("La cantidad de cuotas que eligio no estan disponibles para este prestamo, porfavor solicite en 6, 12, 18 y 36")
        }

    }else {
        alert("No se puede solucitar un prestamo de este monto, por favor solicite un prestamo mayor o igual a $10000 y menor o igual a $3000000")
    }
}

//Funcion para recibir el total de cuotas y muestrar la cantidad de dinero para cada cuota
function montoPorCuota(totalCuotas, monto){
    for ( let i = 1; i <= totalCuotas; i++){
        console.log("La cuota ", i, " es de ", monto)
    }
}