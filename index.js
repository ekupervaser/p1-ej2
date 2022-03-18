"use strict";

/* TODO */

let categoria,
    sueldoBasico,
    subcategoria,
    multiplicador,
    sueldoTotal,
    rango;
    
    categoria = parseInt(prompt('Ingrese la categoría de su sueldo (1, 2 o 3)'));
    console.log(categoria);
    
    subcategoria = prompt('Ingrese la subcategoría de su sueldo (A, B o C)').toUpperCase();
    console.log(subcategoria);


switch(categoria) {
    case '1':
        sueldoBasico = 1000;
        break;
    
    case '2':
        sueldoBasico = 1500;
        break;
    
    case '3':
        sueldoBasico = 2000;
        break;

    default: 
    alert('El dato ingresado no corresponde a ninguna categoría válida');
}


switch(subcategoria) {
    case 'A':
    multiplicador = 1.5;
    break;

    case 'B':
    multiplicador = 2;
    break;

    case 'C':
    multiplicador = 2.5;
    break;

    default:
    alert('El dato ingresado no corresponde a ninguna subcategoría válida');
}


sueldoTotal = sueldoBasico * multiplicador;

if(sueldoTotal >= 1500 && sueldoTotal <= 3000) {
    rango = 'inicial';
} else if(sueldoTotal > 300 && sueldoTotal <= 4000) {
        rango = 'intermedio';
    } else if (sueldoTotal > 4000) {
        rango = 'avanzado'
    };

alert(`El rango de su sueldo es ${rango}`);

