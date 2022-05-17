let claveCorrecta: string = "eureka";
let pass: string = "";

for (let i = 1; i <= 3; i++) {
  pass = prompt("Ingrese la clave, intento N°" + i);
  if (pass === claveCorrecta) {
    console.log("clave correcta");
    break;
  } else {
    console.log("clave incorrecta");
  }
}
