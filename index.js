function wordGenerator(word) {
  const wordArr = word.split('')
  
  function radomChar(arr) {
    const readyArr = []
    const usedArr = []
    
    for (let i = 0; usedArr.length < arr.length; i++) {
      const randomNumber = Math.round(Math.random() * (arr.length - 1))
      if (!usedArr.includes(randomNumber)) {
        readyArr.push(arr[randomNumber])
        usedArr.push(randomNumber)
      }
    }
    
    return readyArr.join('')
  }
  
  return radomChar(wordArr)
}

function wordGenListener(selector) {
  const $main = document.querySelector(selector)

  const $input = $main.querySelector('[data-gen="input"]')
  const $button = $main.querySelector('[data-gen="button"]')
  const $result = $main.querySelector('[data-gen="result"]')

  $button.addEventListener('click', event => {
    event.preventDefault()
    $result.value = wordGenerator($input.value + '')
  })
}

wordGenListener('[data-gen="form"]')