// QUESTION: 1

const sumOf = (num) => {

  if(num === 0 )return 0

  return num + sumOf(num -1)

}
console.log(sumOf(6));

// QUESTION: 2

const multArr = (arr)  => {
  if(arr.length === 0) return 1
  let el = arr.pop()
  return multArr(arr) * el
}

console.log(multArr([5,5,1,2]));

// QUESTION: 3

const concatArr = (arr) => {
  if(arr.length === 0) return ""
    let str = arr.pop()
    return concatArr(arr) + "" + str + " "
}

console.log(concatArr(['or', 'just', 'the', 'end', 'of', 'time']))

// QUESTION: 4
const sumEvens = (arr) => {
  if(arr.length === 0 )return 0
  let el = arr.pop()
  if(el % 2 === 0){
    return sumEvens(arr) + el
}else {
  return sumEvens(arr) + 0
}

}
console.log(sumEvens([2,3,5,6]));
console.log(sumEvens([10, 5, 1, 2, 12]));

// QUESTION: 5
const range = (num1, num2, arr = []) => {
    if(num2 === num1) return arr
    arr.push(num1 + 1)
    num1++
    console.log(arr)
    return range(num1, num2, arr)

}
console.log(range (2,10)) 
