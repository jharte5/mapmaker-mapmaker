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

function changeToInitials(arr) {
  const initials = arr.map(a => a.split(" ").map(word => word[0]).join(''))
  return initials;
}

// console.log(changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq']))

function doubleOdd() {
}

function upperCaseFirstLetters(arr) {
  const changedCase = [];
  arr.forEach(function(a) {
    changedCase.push(a.charAt(0).toUpperCase() + a.substr(1).toLowerCase())
  });
  return changedCase;
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