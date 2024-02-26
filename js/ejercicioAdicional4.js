const proyectoo = ["matematicas", "fisica", "dibujo", "programacion"];
const estadoo = ["en curso", "finalizado", "finalizado", "en curso"];




// Función para agregar proyectos
function agregarProyecto() {
  const posicion = parseInt(prompt("<p>En qué posición del array desea agregar el proyecto:</p>"));

  if (posicion <= 0) {
    const cantidad1 = parseInt(prompt("<p>Cuántos proyectos desea agregar al principio del array?</p>"));
    for (let i = 0; i < cantidad1; i++) {
      const agregado = prompt("<p>Ingrese el nombre del proyecto a agregar: </p>");
      proyectoo.unshift(agregado);

      const estado = prompt("<p>Ingrese el estado del proyecto agregado: </p>");
      estadoo.unshift(estado);
    }
  } else if (posicion >= proyectoo.length) {
    const cantidad1 = parseInt(prompt("<p>Cuántos proyectos desea agregar al final del array?</p>"));
    for (let i = 0; i < cantidad1; i++) {
      const agregado = prompt("<p>Ingrese el nombre del proyecto a agregar: </p>");
      proyectoo.push(agregado);

      const estado = prompt("<p>Ingrese el estado del proyecto agregado: </p>");
      estadoo.push(estado);
    }
  } else {
    const cantidad1 = parseInt(prompt("<p>Cuántos proyectos desea agregar en el medio del array?</p>"));
    for (let i = 0; i < cantidad1; i++) {
      const agregado = prompt("<p>Ingrese el nombre del proyecto a agregar numero </p>");
      proyectoo.splice(posicion + i, 0, agregado);

      const estado = prompt("<p>Ingrese el estado del proyecto agregado: </p>");
      estadoo.splice(posicion + i, 0, estado);
    }
  }
}



// Función para cambiar el estado de un proyecto
function cambiarEstado() {
  estadoo[2] = "en curso";
  estadoo[3] = "finalizado";
}




// Función para ver los responsables y generar un resumen de los proyectos en curso
function responsableYresumen() {
  const responsables = ["Juan Perez", "Nico Roldan", "Eleonora Rodriguez", "Luciano Paez"];
  document.write(`<p>..............................</p>`);
  document.write(`<p>Resumen de proyectos en curso: </p>`);

  for (let i = 0; i < proyectoo.length; i++) {
    if (estadoo[i] === "en curso") {
      document.write(`<p> ${proyectoo[i]} - ${estadoo[i]} - ${responsables[i]}</p>`);
    }
  }
}




agregarProyecto();
cambiarEstado();
responsableYresumen();