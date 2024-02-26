class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      const generaciones = {
        "Baby Boom": "Nacidos entre 1949 y 1968. Característica: Ambición.",
        "Generación X": "Nacidos entre 1969 y 1980. Característica: Obsesión por el exito.",
        "Generación Y (Millennials)": "Nacidos entre 1981 y 1993. Característica: Frustación.",
        "Generación Z": "Nacidos entre 1994 y 2010. Característica: Irreverencia.",
        "Generación Silent": "Nacidos entre 1930 y 1948. Característica: Austeridad."
      };
  
      let generacion = "";
      if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = "Baby Boom";
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Generación Y (Millennials)";
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = "Generación Z";
      } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948 ) {
        generacion = "Generación Silent";
      }
  
      document.write(`La persona pertenece a la generación ${generacion}. <br>`);
      document.write(`Rasgo característico: ${generaciones[generacion]}<br>`);
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        document.write(`${this.nombre} es mayor de edad.<br>`);
      } else {
        document.write(`${this.nombre} no es mayor de edad.<br>`);
      }
    }
  
    mostrarDatos() {
      document.write(`Nombre: ${this.nombre}<br>`);
      document.write(`Edad: ${this.edad}<br>`);
      document.write(`DNI: ${this.dni}<br>`);
      document.write(`Sexo: ${this.sexo}<br>`);
      document.write(`Peso: ${this.peso}<br>`);
      document.write(`Altura: ${this.altura}<br>`);
      document.write(`Año de nacimiento: ${this.anioNacimiento}<br>`);
    }
  
    generaDNI() {
      const dniAleatorio = Math.floor(Math.random() * 100000000);
      this.dni = dniAleatorio;
      document.write(`Se ha generado el DNI: ${dniAleatorio}<br>`);
    }
  }
  
  // Crear objetos Persona
  const persona1 = new Persona("Juan", 25, 12345678, "H", 70, 180, 1995);
  const persona2 = new Persona("María", 30, 98765432, "M", 60, 165, 1990);
  const persona3 = new Persona("Pedro", 17, 54321678, "H", 65, 175, 2004);
  
  // Mostrar generación, si es mayor de edad y datos de las personas
  persona1.mostrarGeneracion();
  persona1.esMayorDeEdad();
  persona1.mostrarDatos();
  document.write("--------------------");
  persona2.mostrarGeneracion();
  persona2.esMayorDeEdad();
  persona2.mostrarDatos();
  document.write("--------------------");
  persona3.mostrarGeneracion();
  persona3.esMayorDeEdad();
  persona3.mostrarDatos();
  document.write("--------------------");
  // Generar DNI aleatorio
  persona1.generaDNI();