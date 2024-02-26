const libro = ["quijote", "odisea", "anonimo", "acantilado"];

// Función para buscar un libro
function buscar() {
  do {
    const libroBuscado = prompt(`Ingrese el nombre del libro a buscar:`);

    let encontrado = false; // Variable para indicar si se encontró el libro

    for (let i = 0; i < libro.length; i++) {
      if (libro[i] === libroBuscado) {
        document.write(
          `<p>El libro ${libro[i]} sí se encuentra en nuestra biblioteca</p>`
        );
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      document.write(
        `<p>El libro ${libroBuscado} NO se encuentra en nuestra biblioteca</p>`
      );
    }
  } while (confirm(`Desea buscar otro libro?`));
}

// Función para verificar si un libro está disponible para préstamo
function verificar() {
  const prestamo = ["quijote", "odisea"]; // Estos son los libros disponibles para préstamo

  do {
    const libroPrestamo = prompt(`Ingrese el nombre del libro para préstamo:`);

    let disponible = false; // Variable para indicar si el libro está disponible

    for (let i = 0; i < prestamo.length; i++) {
      if (libroPrestamo === prestamo[i]) {
        document.write(
          `<p>El libro ${prestamo[i]} sí se encuentra disponible para préstamo</p>`
        );
        disponible = true;
        break;
      }
    }

    if (!disponible) {
      document.write(
        `<p>El libro ${libroPrestamo} NO se encuentra disponible para préstamo</p>`
      );
    }
  } while (confirm(`Desea buscar otro libro para préstamo?`));
}

//Funcion para llevar registro de disponibilidad
function registro() {
  const estado = ["disponible", "disponible", "No disponible", "No disponible"];

  document.write("<p>...............................</p>");
  document.write("<p>Registro de disponibilidad: </p>");
  for (let i = 0; i < libro.length; i++) {
    const libroo = libro[i];
    document.write(`<p>${libroo} - ${estado[i]}</p>`);
  }
}

buscar();
verificar();
registro();
