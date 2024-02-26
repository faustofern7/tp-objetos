class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    mostrarPropiedades() {
      document.write("Alto: " + this.alto + "<br>");
      document.write("Ancho: " + this.ancho + "<br>");
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  // Crear un objeto "rectángulo" utilizando la clase Rectangulo
  const miRectangulo = new Rectangulo(5, 7);
  
  // Mostrar las propiedades del rectángulo
  miRectangulo.mostrarPropiedades();
  
  // Modificar el alto y ancho del rectángulo
  miRectangulo.modificarAlto(8);
  miRectangulo.modificarAncho(10);
  
  // Mostrar las nuevas propiedades del rectángulo
  miRectangulo.mostrarPropiedades();
  
  // Calcular y mostrar el perímetro del rectángulo
  const perimetro = miRectangulo.calcularPerimetro();
  document.write("Perímetro: " + perimetro + "<br>");
  
  // Calcular y mostrar el área del rectángulo
  const area = miRectangulo.calcularArea();
  document.write("Área: " + area + "<br>");