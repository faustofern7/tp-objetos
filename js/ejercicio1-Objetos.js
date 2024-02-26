const auto = {
    color: "verde",
    marca: "Toyota",
    modelo: "Etios",
    encendido: false,
    
    encender: function() {
      if (this.encendido) {
        console.log("El auto ya está encendido.");
      } else {
        this.encendido = true;
        console.log("El auto se encendió.");
      }
    },
    
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log("El auto se apagó.");
      } else {
        console.log("El auto ya está apagado.");
      }
    }
  };
  
  auto.encender(); // El auto se encendió.
  auto.apagar(); // El auto se apagó.