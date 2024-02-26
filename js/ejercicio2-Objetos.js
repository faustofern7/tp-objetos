const cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        document.write("Se ha ingresado $" + cantidad + " a la cuenta.<br>");
      } else {
        document.write("La cantidad ingresada debe ser mayor que 0.<br>");
      }
    },
  
    extraer: function(cantidad) {
      if (cantidad > 0) {
        if (cantidad <= this.saldo) {
          this.saldo -= cantidad;
          document.write("Se ha extraído $" + cantidad + " de la cuenta.<br>");
        } else {
          document.write("Saldo insuficiente. No se puede extraer esa cantidad.<br>");
        }
      } else {
        document.write("La cantidad a extraer debe ser mayor que 0.<br>");
      }
    },
  
    informar: function() {
      document.write("Titular: " + this.titular + "<br>");
      document.write("Saldo: $" + this.saldo + "<br>");
    }
  };
  
  cuenta.informar(); // Muestra la descripción inicial de la cuenta
  cuenta.ingresar(1000); // Ingresa $1000 a la cuenta
  cuenta.extraer(500); // Extrae $500 de la cuenta
  cuenta.informar(); // Muestra la descripción actualizada de la cuenta