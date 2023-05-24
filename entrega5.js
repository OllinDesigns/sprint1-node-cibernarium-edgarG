// Edgar Garcia Santos


// Nivell 1 - Exercici 1, Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const { writeFile } = require('fs/promises');
async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Niv 1 ex 1: Data ha sido escrita en el  ${fileName}`);
  } catch (error) {
    console.error(`Se ha detectado un error en el intento de escribir en el archivo: ${error.message}`);
  }
}

writeToFile('fN1ex1.txt', 'Nivell 1 - Exercici 1: Hola clase node.js');


//Nivell 1 - Exercici 2, Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'fN1ex1.txt'), 'utf-8', (err, data) =>{
  setTimeout(() => {
    if (err) throw err;
    console.log(`Niv 1 Ex 2: leyendo el archivo anterior:`);
    console.log(data);
  }, 70);
   
})


// Nivel 1 - Exercici 3, Crea una funció que comprimeixi el fitxer del nivell 1.

// aqui debo importar el modulo para la zlib commpresion library
const zlib = require('zlib');

function compressFile(inputPath, outputPath) {
  const inputStream = fs.createReadStream(inputPath);
  const outputStream = fs.createWriteStream(outputPath);

  const gzip = zlib.createGzip();

  setTimeout(() => {
    
    inputStream.pipe(gzip).pipe(outputStream);
    // el .pipe se usa para dirigir el output de un readablestream a un writablestream
  
    outputStream.on('finish', () => {
      // el .on registra event listeners para otros eventos especificos
      console.log('Nivel 1 - Exercici 3: File compressed successfully.');
    });
  
    outputStream.on('error', (error) => {
      console.error('Error compressing file:', error);
    });

  }, 200);
}

compressFile('fN1ex1.txt', 'compressedfileN1ex1.gz');


// Nivell 2 - Exercici 1 Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

function printMessageRecursively(message, delayInSeconds) {
  if (message.length === 0) {
    return; 
  }

  setTimeout(() => {
    
    console.log(message[0]); 

  }, 600);
  
  const remainingMessage = message.slice(1); // para darle un efecto

  setTimeout(() => {
    printMessageRecursively(remainingMessage, delayInSeconds); // llama la funcion recursivamente para que obtenga el resto del mensaje
  }, delayInSeconds * 1000); // convierte delayInSeconds a milisegundos
}

printMessageRecursively("Niv2Ex1", 1);


//Exercici 2 Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

const { exec } = require('child_process');
// const path = require('path'); ya esta declarado arriba pero es necesario para la ejecucion

function listUserDirectory() {
  const userDirectory = path.resolve(__dirname); // para el path del user directory

  // 'ls' command para Unix/Linux o 'dir' command on Windows, importante, sin estos parametros es posible que no lea el directorio
  const command = process.platform === 'win32' ? 'dir' : 'ls';

  // Ejecuta el comando usando el directorio
  
  setTimeout(() => {
    exec(command, { cwd: userDirectory }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error occurred: ${error.message}`);
        return;
      }
  
      if (stderr) {
        console.error(`Command execution error: ${stderr}`);
        return;
      }
  
      console.log(`Nivell 2 Exercici 2: User Directory Contents:\n${stdout}`);
    });
  }, 7000);
}

listUserDirectory();


//Nivell 3 - Exercici 1, primera parte: Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

const { readFile } = require('fs/promises');
const { encode } = require('hex-encode-decode'); // es el modulo que encodifica

async function createEncodedFiles(fileName) {

  setTimeout( async () => {
    try {
      const filePath = path.resolve(fileName); 
      const data = await readFile(filePath, 'utf8');
  
      // para hex
      const hexData = encode(data, 'hex');
      const hexFileName = path.join(path.dirname(filePath), `${path.basename(fileName, path.extname(fileName))}_hex.txt`);
      await writeFile(hexFileName, hexData, 'utf8');
      console.log(`N3Ex1: Hex encoded file created: ${hexFileName}`);
  
      // para base64
      const base64Data = Buffer.from(data, 'utf8').toString('base64');
      const base64FileName = path.join(path.dirname(filePath), `${path.basename(fileName, path.extname(fileName))}_base64.txt`);
      await writeFile(base64FileName, base64Data, 'utf8');
      console.log(`N3Ex1: Base64 encoded file created: ${base64FileName}`);
    } catch (error) {
      console.error(`An error occurred while creating encoded files: ${error.message}`);
    }
    
  }, 7500);
  
}

createEncodedFiles('fN1ex1.txt'); // para que esta funcione hay que instalar npm install hex-encode-decode


//Nivell 3 - Exercici 1 segunda parte: Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

const { unlink } = require('fs/promises');
const crypto = require('crypto');

async function createEncodedF(fileName) {
  try {
  const filePath = path.resolve(fileName);
  const data = await readFile(filePath, 'utf8');

setTimeout( async () => {
  const key = crypto.randomBytes(24);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  const encryptedFileName = path.join(path.dirname(filePath), `${path.basename(fileName, path.extname(fileName))}_encrypted.txt`);
  await writeFile(encryptedFileName, encryptedData, 'utf8');
  console.log(`Niv3Ex1: Encrypted file created: ${encryptedFileName}`);

}, 7600);
  // Encrypt data using aes-192-cbc
  
  // Delete initial file
  setTimeout( async ()  => {
      await unlink(filePath);
      console.log(`Niv3Ex1: Initial file deleted: ${filePath}`);
  }, 7700);
  
} catch (error) {
  console.error(`An error occurred while creating encoded and encrypted files: ${error.message}`);
}
}

createEncodedF('fN1ex1.txt');


//Nivell 3 - Exercici 1 tercera parte: Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

setTimeout(() => {
  console.log('no he podido hacer el N3E1 que desencripte y descodifique los anteriores ')
}, 7800);


//Nivell 3 - Exercici 1 cuarta parte: Inclou un README amb instruccions per a l'execució de cada part.

setTimeout(() => {
  writeToFile('ReadMe.txt', `Nivel 1 Ejercicio 1: toca crear una función que escriba y cree un archivo. Se invoca la función con el primer parámetro fileName. Aquí nombramos nuestro archivo, en este caso readme. En el segundo parámetro, data es donde estoy escribiendo este texto dentro de un template literal

Nivel 1 Ejercicio 2: importar el fs de node.js asi,

const { readFile } = require('fs/promises'); 

Después creo la función readThisFile('filepath')  y remplazo el parámetro filepath con el nombre de mi archivo, en este caso readme.txt, pues es el archivo que acabo de crear y ahora quiero leer.

Nivel 1 Ejercicio 3: Creo la función compressFile(inputPath, outputPath). Invoco la función cambiando el parámetro inputPath por el nombre del archivo que debo comprimir y 
outputPath con el nombre que deseo nombrar mi archivo comprimido.

Nivel 2, ejercicio 1: Debo crear una función que contenga un setTimeout de 1 segundo. En este caso la he nombrado así: printMessageWithDelay(message). Al invocarla, debo cambiar el parámetro message por mi mensaje deseado.

Nivel 2, ejercicio 2, Debo importar el modulo node child process

const { exec } = require('child_process');

Ahora cree una función que lea el directorio en Windows, pues es diferente para Linux y para Mac. 

function listUserDirectory(); -  en este caso funciona sin parámetros

Nivel 3, ejercicio 1. He creado 2 funciones, y en cada una debo invocarla con parámetros personalizados, indicando donde están los archivos que quiero codificar

createHexEncodedFile(inputFilePath, outputFilePath)
para HEX

createBase64File(filePath)
para base64

y por último he creado este readme como he explicado en el punto 1.`);
console.log(`Nivell 3 - Exercici 1 cuarta parte: el Readme ha sido creado`)
}, 7900);

