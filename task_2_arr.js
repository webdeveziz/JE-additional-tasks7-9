// Задание 2

const symbols = ['>', '<', '=', '+', '-', '*', '/']

// Это функция отвечает за проверку нужных символов для нашей задачи
function setMathFunc(symbol) {
  switch (symbol) {
    case '+':
      return (a, b) => Number(a) + Number(b)
    case '-':
      return (a, b) => Number(a) - Number(b)
    case '*':
      return (a, b) => Number(a) * Number(b)
    case '>':
      return (a, b) => Number(a) > Number(b)
    case '<':
      return (a, b) => Number(a) < Number(b)
    case '=':
      return (a, b) => Number(a) === Number(b)
    case '/':
      return (a, b) =>
        Number(b) === 0 ? 'Число не делится на ноль!' : Number(a) / Number(b)
    default:
      return false
  }
}

// С помошью этой функции мы длинный массив преврашаем на массив, который состоит из трех элементов
function mostSymbolsThan3(arr) {
  const arrThreeElements = arr
    .filter((el) => {
      // filter - преврашаем на массив, который состоит из трех элементов
      if (typeof el === 'number' || typeof el === 'string') {
        if (!isNaN(Number(el)) || isSymbol(el, symbols)) {
          return el
        }
      }
    })
    .map((el) => {
      // map - два элемента массива сделаем числами, а один остается строкой
      if (isNaN(Number(el))) {
        return el
      } else {
        return Number(el)
      }
    })

  function isSymbol(symbol, arr) {
    // функция сверяет символ из нашего массива с набором ['>', '<', '=', '+', '-', '*', '/']
    return arr.some((el) => symbol === el)
  }

  // Тут я определяю места для элементов массива, то есть если [100, 200, '+'] => [100, '+', 200]
  function whereOurSymbol(symbol, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (symbol === arr[0]) {
        let temp = arr[1]
        arr[1] = arr[0]
        arr[0] = temp
        break
      } else if (symbol === arr[2]) {
        let temp = arr[1]
        arr[1] = arr[2]
        arr[2] = temp
        break
      }
    }
    return arr
  }

  for (let i = 0; i < arrThreeElements.length; i++) {
    if (typeof arrThreeElements[i] === 'string') {
      return whereOurSymbol(arrThreeElements[i], arrThreeElements)
    }
  }
}

function getMathResult(expression = []) {
  //конечная функция
  if (expression.length > 3) {
    const arr = mostSymbolsThan3(expression)
    return console.log(setMathFunc(arr[1])(arr[0], arr[2]))
  } else if (expression.length < 3) {
    return console.error('Ошибка!')
  } else {
    if (
      !isNaN(Number(expression[0])) &&
      !isNaN(Number(expression[2])) &&
      setMathFunc(expression[1])
    ) {
      return console.log(
        setMathFunc(expression[1])(expression[0], expression[2])
      )
    } else {
      return console.error('Ошибка!')
    }
  }
}

getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4]) //104
getMathResult(['200', '+', 300]) // 500
getMathResult(['20', '-', '5']) // 15
getMathResult(['100', '/', 100]) // 1
getMathResult([2, '-', 2]) // 0
getMathResult(['5', '>', '10']) // false
getMathResult(['5', '<', '10']) // true
getMathResult(['1', '=', 1]) // true
getMathResult(['1', '**', 1]) // 'Ошибка'
