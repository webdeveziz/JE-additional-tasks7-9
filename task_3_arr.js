// Задание 3

function matrix() {
  let arr = []

  for (let i = 0; i < 3; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++) {
      arr[i][j] = j + 1
    }
  }

  return console.log(arr)
}

matrix()

// Как вариант

// function matrix() {
//   let arr = []

//   for (let i = 0; i < 3; i++) {
//     const temp = []
//     for (let j = 1; j <= 5; j++) {
//       temp.push(j)
//     }
//     arr.push(temp)
//   }

//   return console.log(arr)
// }
