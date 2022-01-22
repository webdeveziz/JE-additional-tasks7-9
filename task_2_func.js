// Задание #2

function showSuccessMessage(message) {
  console.log(message)
}
function showErrorMessage(message) {
  console.error(message)
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback
) {
  let temp = true

  for (let i = 0; i < text.length; i++) {
    const el = text[i]
    if (errorSymbol === el) {
      temp = false
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`
      )
    }
  }

  if (temp) successCallback('В данном тексте нет запрещенных символов!')
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)
