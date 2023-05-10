import cipher from './cipher.js';

console.log(cipher);

// Botones, área de texto y llave

const cifrarBtn = document.getElementById('cifrar');
const descifrarBtn = document.getElementById('descifrar');
const txtArea = document.getElementById('txt');
const key = document.getElementById('key');

// Evento cifrado

cifrarBtn.addEventListener('click', function(keyValue, txtMayus) {
  const txtAreaValue = txtArea.value;
  txtMayus = txtAreaValue.toUpperCase();
  keyValue = Number(key.value);
  if (keyValue === 0) {
    alert('Por favor, escribe una llave con valor númerico para hacer el cifrado.');
  }
  console.log(keyValue);
  const nuevoTxt = cipher.encode(keyValue, txtMayus);
  txtArea.value = nuevoTxt;
  console.log(nuevoTxt);
});

// Evento descifrado

descifrarBtn.addEventListener('click', function(keyValue, txtMayus) {
  const txtAreaValue = txtArea.value;
  txtMayus = txtAreaValue.toUpperCase();
  keyValue = Number(key.value);
  if (keyValue === 0) {
    alert('Por favor, escribe una llave con valor númerico para hacer el cifrado.');
  }
  console.log(keyValue);
  const nuevoTxt = cipher.decode(keyValue, txtMayus);
  txtArea.value = nuevoTxt;
  console.log(nuevoTxt);
});