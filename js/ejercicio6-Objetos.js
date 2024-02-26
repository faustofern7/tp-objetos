class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    getISBN() {
      return this.ISBN;
    }
  
    setISBN(ISBN) {
      this.ISBN = ISBN;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    setTitulo(titulo) {
      this.titulo = titulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    getNumPaginas() {
      return this.numPaginas;
    }
  
    setNumPaginas(numPaginas) {
      this.numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      document.write(
        "El libro " +
          this.titulo +
          " con ISBN " +
          this.ISBN +
          " creado por el autor " +
          this.autor +
          " tiene " +
          this.numPaginas +
          " páginas.<br>"
      );
    }
  }
  
  // Crear objetos Libro y utilizar el método mostrarLibro()
  const libro1 = new Libro("9780123456789", "Libro 1", "Nico", 200);
  const libro2 = new Libro("9789876543210", "Libro 2", "Emanual", 300);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Determinar cuál de los dos libros tiene más páginas
  if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    document.write("El libro 1 tiene más páginas.");
  } else if (libro2.getNumPaginas() > libro1.getNumPaginas()) {
    document.write("El libro 2 tiene más páginas.");
  } else {
    document.write("Ambos libros tienen la misma cantidad de páginas.");
  }