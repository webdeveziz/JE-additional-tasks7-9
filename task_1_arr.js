// Задание 1

const goals = [8, 1, 1, 3, 2, -1, 5]

// 1. Самый результативный матч по количеству голов - [8, 1, 1, 3, 2, -1, 5]
function mostEffectiveMatch(arr) {
  let number = 0
  let numberOfGoals = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > numberOfGoals) {
      numberOfGoals = arr[i]
      number = i
    }
  }

  return `Самый результативный матч был под номером ${
    number + 1
  }. В нем было забито ${numberOfGoals} гол(ов).`
}
alert(mostEffectiveMatch(goals))

// 2. Самые нерезультативные игры - [8, 1, 1, 3, 2, -1, 5]
function mostUnsuccessfulMatches(arr) {
  const numbers = []

  let min = arr[0] <= 0 ? 1 : arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min && arr[i] > 0) min = arr[i]
  }

  const numberOfGoals = arr.filter((el, i) => {
    if (min === el) {
      numbers.push(i + 1)
      return true
    }
  })
  return `Самые нерезультативные матчи были под номерами ${numbers.join(', ')}. 
В каждом из них было забито по ${numberOfGoals[0]} мячу(а).`
}
alert(mostUnsuccessfulMatches(goals))

// 3. Общее количество голов за сезон - [8, 1, 1, 3, 2, -1, 5]
function totalNumberOfGoals(arr) {
  const numberOfGoals = arr
    .filter((el) => el > 0)
    .reduce((acc, el) => acc + el, 0)

  return `Общее количество голов за сезон равно ${numberOfGoals}`
}
alert(totalNumberOfGoals(goals))

// 4. Были ли автоматические поражения? - [8, 1, 1, 3, 2, -1, 5]
function automaticDefeats(arr) {
  const isElem = arr.find((el) => el < 0)
  if (isElem) return `Были автоматические поражения: да`
  else return `Были автоматические поражения: нет`
}
alert(automaticDefeats(goals))

// 5. Среднее количество голов за матч - [8, 1, 1, 3, 2, -1, 5]
function averageNumberOfGoals(arr) {
  const undefeats = arr.filter((el) => el > 0)
  const numberOfGoals = undefeats.reduce((acc, el) => acc + el, 0)

  return `Среднее количество голов за матч равно ${Math.floor(
    numberOfGoals / undefeats.length
  )}`
}
alert(averageNumberOfGoals(goals))

// 6. Отсортируйте голы в порядке возрастания - [8, 1, 1, 3, 2, -1, 5]
function sortGoals(arr) {
  const numberOfGoals = [...arr].sort((a, b) => a - b).join(', ')
  return `${numberOfGoals}`
}
alert(sortGoals(goals))
