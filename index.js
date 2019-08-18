function add(a, b) {
  var sum = a + b
  return sum
}

function subtract(a, b) {
  var reslt = (a - b)
  return reslt
}

function multiply(a, b) {
  var sum = (a * b)
  return sum
}

function divide(a, b) {
  var dividend = (a / b)
  return dividend
}

function inc(n) {
  return n++
}

function dec(n) {
  return n--
}

function makeInt(n) {
  var retval = parseInt(n, 10)
  return retval
}

function preserveDecimal(n) {
  var retval = parseFloat(n)
  return retval
}