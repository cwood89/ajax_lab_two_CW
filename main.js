function testNum(num) {
  return new Promise((resolve, reject) => {
    if (num > 50) {
      resolve(num + " is greater than 50, success!")
    } else {
      reject(num + " is less than 50, error!")
    }
  })
}
testNum(60)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  
testNum(20)
  .then(result => console.log(result))
  .catch(error => console.log(error));