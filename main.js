alert("Bienvenido a la Calculadora");

let operacion = parseFloat(prompt("Ingrese que tipo de operacion desea hacer\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division"))
       
        while (isNaN(operacion)){
            alert("ATENCION: Ingrese una de las opciones 1, 2, 3 o 4!!!")
            operacion = parseFloat(prompt("Ingrese el tipo de operacion desea hacer\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division"))
        }

while (true) {
		
    let num1 = parseFloat(prompt("Ingrese el primer numero"))
        while (isNaN(num1)){
            alert("ATENCION: Ingrese un Numero!!!")
            num1 = parseFloat(prompt("Ingrese el primer numero"))
        }

    let num2 = parseFloat(prompt("Ingrese el segundo numero"))
        while (isNaN(num2)){
            alert("ATENCION: Ingrese un Numero!!!")
            num2 = parseFloat(prompt("Ingrese el segundo numero"))
        }

    switch (operacion) {
        case 1:
            console.log("El resultado de la suma es de " + (num1 + num2))
            break;
        case 2:
            console.log("El resultado de la resta es de " + (num1 - num2))
            break;
        case 3:
            console.log("El resultado de la multiplicacion es de " + (num1 * num2))
            break;
        case 4:
            console.log("El resultado de la division es de " + (num1 / num2))
            break;
    }

    if (confirm("¿Quiere salir del sistema?")) {
        alert("Saliendo del sistema")
        break
    }

 }