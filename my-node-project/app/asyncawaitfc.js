async function myAsyncFunction(mymessage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const message = mymessage;
        if (message.length === 0) {
          reject(new Error(`empty message`));
        } else {
          resolve(message);
        }
      }, 2000);
    });
  }
  
  myAsyncFunction('didi')
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });


// myAsyncFunction ('didi');

module.exports = {myAsyncFunction};