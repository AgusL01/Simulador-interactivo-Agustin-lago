  let precioIndicado= prompt("ingrese el precio que necesite")
  let precio= precioIndicado;
const newLocal = 0.21;
  let iva= precio => precio*newLocal;
  let PrecioConIva= precio+iva;
alert (PrecioConIva)