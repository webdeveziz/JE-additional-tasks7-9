// Задание 4

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

function arrayDeployment(arr) {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i])
  }

  return newArr
}

console.log(arrayDeployment(matrix))
