function doubleAll(arr, start = 0, end = arr.length) {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr
} 


function absoluteValues(arr) {
  const newArr =[]
  arr.forEach(a => {
    if(a>=0){
      newArr.push(a)
    }else if(a<0){
      newArr.push(a*-1)
    }
  })
  return newArr;
}

function yelledGreetings(string) { 
  const yelled = [];
  string.forEach(s => yelled.push(s + '!'));
  return yelled;
}

function changeToInitials(arr, start = 0, end = arr.length) {
  const justInitials = []

  for (let i = 0; i < arr.length; i ++) {
    justInitials.push(arr[i])
  }

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