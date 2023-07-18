let saldo = 0;
let movimientos = [];

let cuentas = {};

let accountNumber = null;

let noAccountErrorPanelElement = document.getElementById("noAccountErrorPanel");
let saldoElement = document.getElementById("spSaldoCuenta");

function render() {
  noAccountErrorPanelElement.style.display = accountNumber ? "flex" : "none";
  saldoElement.innerHTML = accountNumber ? saldo : "0";
}

function onClickIngresarCuenta() {
  let noCuenta = document.getElementById("inNoCuenta").value;
  /*if (!oCuentas[noCuenta]) {
    alert("El numero de cuenta no existe verifique los datos ingresados");
    return;
  }*/

  if (noCuenta) {
    let isAccount = false;

    for (let cuenta in cuentas) {
      if (cuenta === noCuenta) {
        isAccount = true;
        accountNumber = cuenta;
        noAccountErrorPanelElement.style.display = "none";

        break;
      }
    }

    if (isAccount) {
      saldo = cuentas[noCuenta];
      alert("Se ha ingresado satisfactoriamente a la cuenta " + accountNumber);
    } else alert("No se ha podido encontra la cuenta: " + noCuenta);
  } else alert("Ingrese por favor un número de cuenta válido");

  console.log(cuentas);
}

function onClickAgregarCuenta() {
  let noCuenta = document.getElementById("inNoCuenta").value;

  if (noCuenta) {
    cuentas[noCuenta] = 0;
    alert(`Se ha agregado la cuenta ${noCuenta} con un valor inicial de 0`);
  } else alert("Ingrese por favor un número de cuenta válido");
}

function mostrarSaldo() {
  if (accountNumber) {
    noAccountErrorPanelElement.style.display = "none";
  } else {
    noAccountErrorPanelElement.style.display = "flex";
  }

  document.getElementById("spSaldoCuenta").innerHTML = saldo.toString();

  mostrarTransacciones();
  render();
}

function getValueInput(idInput) {
  const valor = parseInt(document.getElementById(idInput).value) || 0;

  document.getElementById(idInput).value = 0;

  if (valor <= 0) {
    alert("Debe de ingresar un valor mayor que 0");
    return;
  }

  return valor;
}

function depositar() {
  const valorDepositar = getValueInput("inValorDepositar").value;

  if (!valorDepositar) saldo += valorDepositar;

  movimientos.unshift(
    "Se ha realizado un deposito por valor de: " + valorDepositar
  );

  render();
}

function retirar() {
  const valorRetirar = getValueInput("inValorRetirar");

  if (saldo - valorRetirar < 0) {
    alert("No cuenta con los fondos suficientes para realizar ese retiro");
    return;
  }

  saldo -= valorRetirar;

  movimientos.unshift(
    "Se ha realizado un retiro por valor de: " + valorRetirar
  );

  mostrarSaldo();
}

function mostrarTransacciones() {
  document.getElementById("scMovimientos").innerHTML = movimientos
    .map((movimiento, i) => `<span>${i + 1}. ${movimiento}</span>`)
    .join("<br />");
}

function limpiarCajero() {
  saldo = 0;
  movimientos = [];
  mostrarSaldo();
}

function main() {
  mostrarSaldo();
}

main();
