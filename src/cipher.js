const cipher = {

  // Función cifrado

  encode: function (offset, string) {
    const codigoA = 'A'.charCodeAt(0);
    const codigoZ = 'Z'.charCodeAt(0);
    let nuevoTxt = '';

    if (string === '') {
      alert('Por favor, escribe el mensaje que quieras cifrar.');
      throw TypeError('No se puede dejar el área de texto vacía');
    } else if (!offset) {
      throw TypeError('No se puede dejar la llave vacía.');
    } else {
      for (let i = 0; i < string.length; i++) {
        let codigo = string.charCodeAt(i);
        if (codigo >= codigoA && codigo <= codigoZ) {
          codigo = (codigo + offset + codigoA) % 26 + codigoA;
        }
        nuevoTxt += String.fromCharCode(codigo);
      }
      return nuevoTxt;
    }
  },

  // Función descifrado

  decode: function (offset, string) {
    const codigoA = 'A'.charCodeAt(0);
    const codigoZ = 'Z'.charCodeAt(0);
    let nuevoTxt = '';

    if (string === '') {
      alert('Por favor, escribe el mensaje que quieras cifrar.');
      throw Error('No se puede dejar el área de texto vacía');
    } else if (!offset) {
      throw TypeError('No se puede dejar la llave vacía.');
    } else {
      for (let i = 0; i < string.length; i++) {
        let codigo = string.charCodeAt(i);
        if (codigo >= codigoA && codigo <= codigoZ) {
          codigo = (codigo - offset + codigoA) % 26 + codigoA;
        }
        nuevoTxt += String.fromCharCode(codigo);
      }
      return nuevoTxt;
    }
  }
}

export default cipher;