let compra = prompt("ingrese el tipo de vehiculo")
let precio= prompt("ingrese el precio del vehiculo")
 
alert precio=precio*0.15/100
if(compra=== "moto" || compra=== "carro"){
    alert("su descuento es del 15%");(precio*15/100)
} else if(compra==="bicicleta"|| compra==="patineta"){
    alert("su descuento es de 10%")
}else{(compra==="scooter electrico")
    alert("su descuento es de 5%")
}
 