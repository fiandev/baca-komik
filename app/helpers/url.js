const urlTrim = (url) => {
  let rgx = /( )/g
  let detect = rgx.test(url)
  let result = detect ? url.split(" ").join("+") : url
  
  return encodeURI(result)
}
module.exports = {
  urlTrim
}