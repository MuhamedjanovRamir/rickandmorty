export const getRandomNumbers = (max, length) => {
  const randomNumbers = []

  for(let i = 0; i < length; i++){
    const number = Math.floor(Math.random() * max);
    randomNumbers.push(number)
  }

  return randomNumbers
}

export const getIdFromUrl = url => {
  if (!url) return null
  
  const arr = url.split('/')
  return arr[arr.length - 1]
}

export const getPageId = url => {
  if (!url) return null

  const urlParts = url.split('?')
  const queryString = urlParts[1]

  const params = new URLSearchParams(queryString)
  return params.get('page')
}
