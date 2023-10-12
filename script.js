function* ger1(){
    yield 'val 1'
    yield 'val 2'
    yield 'val 3'
}
let g1 = ger1()

//primeira maneira 
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)

//segunda maneira
for(let val of g1){
    console.log(val)
}