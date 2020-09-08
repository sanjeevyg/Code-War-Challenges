var moveZeros = function (arr) {
    // TODO: Program me
    let array1 = [];
    let array2 = [];
    arr.forEach(element => {
      if (element !== 0) {
        array1.push(element)
      } else if(element === 0) {
          array2.push(element)
      }
    })
    array = array1.concat(array2)
    console.log(array)
}


// return array
moveZeros([1,2,0,1,0,1,0,3,0,1])

// let indexE = arr.indexOf(element)
// arr.splice(indexE, 1)