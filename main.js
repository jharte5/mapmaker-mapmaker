function doubleAll(arr, start = 0, end = arr.length) {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr
} 


function absoluteValues(arr, start = 0, end = arr.length) {
  const newArr =[]

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if(newArr <= 0) {

    } else {
      arr[i] < 0
    }
  }
  return newArr
  
}

function yelledGreetings() {
}

function changeToInitials() {
}

function doubleOdd() {
}

function upperCaseFirstLetters() {
}

function add1ToLeft() {
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}