const productos = ["bicicleta", "cubierta", "pedal", "silleta"];
const precios = [1200, 150, 15, 50];

//funcion para agregar productos
function agregar(productos, precios) {
  let cantidad = parseInt(prompt(`<p>Cuantos productos desea agregar?</p>`));
  if (cantidad > 0) {
    for (let i = 0; i < cantidad; i++) {
      let nombre = prompt("Ingrese el nombre del producto:");
      let precio = parseInt(prompt("Ingrese el precio del producto:"));

      productos.push(nombre);
      precios.push(precio);
    }

    alert(`<p>Productos agregados correctamente</p>`);
  } else {
    document.write(`<p>Usted no desea agregar ningun producto</p>`);
  }
}

//funcion para eliminar productos agotados
function eliminar() {
  for (let i = productos.length - 1; i >= 0; i--) {
    const stock = parseInt(
      prompt(`<p>Ingrese el stock del producto en la posición ${i}</p>`)
    );
    if (stock === 0) {
      productos.splice(i, 1);
      precios.splice(i, 1);
    }
  }
}

//Funcion para calcular el valor total del inventario
function calcularTotal() {
  let total = 0;

  for (let i = 0; i < precios.length; i++) {
    total = total + precios[i];
  }

  return total;
}

agregar(productos, precios);
eliminar();
document.write(`<p>Inventario actualizado: ${productos}</p>`);
document.write(`<p>Lista de precios actualizada: ${precios}</p>`);

const totalInventario = calcularTotal();
document.write(`<p>El valor total del inventario es: ${totalInventario}</p>`);
