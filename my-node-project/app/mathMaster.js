const multiplier = (d) => {
  return new Promise((resolve, reject) => {
    if (isNaN(d)) {
      reject(new Error(`insert a number`));
    } else {
      resolve(d * 2);
    }
  });
};

async function mathMaster(a, b, c) {
  try {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error('only numbers');
    }

    const result1 = await multiplier(a);
    const result2 = await multiplier(b);
    const result3 = await multiplier(c);
    const finalResult = result1 + result2 + result3;

    return Promise.resolve(finalResult);
  } catch (error) {
    console.error(error.message);
    throw error; // Re-throw the error
  }
}

mathMaster(22, 6, 33);
  
  module.exports = {mathMaster, multiplier};


  // vieja funcion que no funcionaba por la promise
// async function mathMaster(a, b, c) {
//   try {
//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//       throw new Error('only numbers');
//     }

//     const result1 = await multiplier(a);
//     const result2 = await multiplier(b);
//     const result3 = await multiplier(c);
//      setTimeout(() => {
//       return result1 + result2 + result3
//       }, 2000);
//     // return result1 + result2 + result3;
//   } catch (error) {
//     console.error(error.message);
//     throw error; // Re-throw the error
//   }
// }
