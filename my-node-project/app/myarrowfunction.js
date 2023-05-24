const myArrowFunction = (param, callback) => {
    if (param === 'mensaje') {
      callback('Nivel1 Exercici2: este mensaje sale si param es = a mensaje.');
    } else {
      callback('Nivel1 Exercici2: este es mi mensaje personalizado.');
    }
  };

  

  module.exports = myArrowFunction;