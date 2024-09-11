const mayor = (a, b, c) => {
    if (a > b && a > c) {
        return "El número mayor es: " + a;
    } else if (b > a && b > c) {
        return "El número mayor es: " + b;
    } else {
        return "El número mayor es: " + c;
    }
}

const iguales = (a, b, c) => {
    if(a == b){
        return "Los números a y b son iguales";
    } else if (a == c) {
        return "Los números a y c son iguales";
    } else if (b == c) {
        return "Los números b y c son iguales";
    }
}

const resultado = mayor(10, 20, 30);
document.write(resultado);
document.write("<br>");
const resultado2 = iguales(10, 10, 30);
document.write(resultado2);