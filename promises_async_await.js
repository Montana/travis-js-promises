getAmountAsync(1);

 async function getAmountAsync(userId) {
    try {
    const user = await getUser(userId);
    console.log(`User name is: ${user} `);
    const amount = await getBankBalance(user);
    console.log(amount);
    } catch (error) {
      console.log(error);
    }
 } 
 
function getAmount(userId) {
  getUser(userId)
    .then(getBankBalance)
    .then(amount => {
      console.log(amount);
    })
    .catch(error => {
      console.log(error);
    })
}

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve('John');
      } else {
        reject('unknown user');
      }
    }, 1000)
  })
}

function getBankBalance(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'John') {
        resolve('$ 1,000');
      } else {
        reject('unknown user');
      }
    }, 1000)
  })
}

waitASecond(0)
  .then(waitASecond)
  .then(waitASecond)
  .then((second) => {
    console.log(second)
  })

function waitASecond(second) {
  console.log(second)
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      second++
      resolve(second)
    }, 1000)
  })
} 

const calculatePromise = new Promise((resolve, reject) => {
  console.log('In new Promise, start callback')
  setTimeout(() => {
    let answer = 3 + 5
    resolve(answer)
  }, 1000)
})

calculatePromise.then(addTwo)
  .then(addTwo)
  .then(printResult)

function addTwo(value) {
  console.log('current value', value)
  return value + 2
}

function printResult(value) {
  console.log('The final value is ' + value)
