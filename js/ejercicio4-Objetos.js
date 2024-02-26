class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      document.write("Código: " + this.codigo + "<br>");
      document.write("Nombre: " + this.nombre + "<br>");
      document.write("Precio: $" + this.precio + "<br><br>");
    }
  }
  
  // Crear tres instancias de la clase Producto y guardarlas en un array
  const productos = [
    new Producto("001", "Producto 1", 10),
    new Producto("002", "Producto 2", 20),
    new Producto("003", "Producto 3", 30)
  ];
  
  // Mostrar los valores de los tres objetos instanciados
  for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
  }